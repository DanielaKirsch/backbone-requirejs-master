

define([
  'jquery',
  'modernizr',
  'underscore',
  'backbone',
  'views/HomeView',
  'views/WorkView',
  'collections/PageCollection',
  'models/PageModel',
  'module'
   
], function($, Modernizr, _, Backbone, HomeView, WorkView,
  
  PageCollection,
  PageModel, module){

  var smartRouter = Backbone.Router.extend({
      routes: {
        '/' : 'startPage',  
        ':index': 'startPage',
        '*action': 'startPage'    
      },

      startPage: function(index) {

        // check if all needed data is loaded
        if(_.size(this.pageCollection) > 0) {

          this.createPage(index);
        }
        else {
            this.pageCollection = new PageCollection();
            
            var deferredPage = this.pageCollection.fetch(),
              _this = this;

            deferredPage.done(function() {
             
              _this.createPage(index);

              
            });
        }
      
      },

     
      createPage: function(index) {
      

        var pageModel = this.getPageModel(index),
        obj = {
            model: pageModel,
            collection: this.pageCollection,
          };
 

        Backbone.history.navigate(pageModel.get('link'), {trigger: false, replace: true});
         
          
          // this is very important for google tracking
          // if(googleTracking == true) {
          //     var path = Backbone.history.getFragment();
          //     ga('send', 'pageview', {page: "/" + path});
          // }
       


        switch(pageModel.get('template')) {
          case 'homePage':
              this.showHome(obj);
              break;
          case 'workPage':
              this.showWork(obj);
              break;
          case 'statisticsPage':
              this.showStatistics(obj);
              break;
          case 'contentPage':
              this.showContent(obj);
              break;
          case 'cityPage':
              this.showCity(obj);
              break;
          default:
             this.showHome(obj);
        }
 
      },

      showHome: function(obj) {

        if(this.appHomeView) {
           this.appHomeView.render(obj);
        }
        else {
          this.appHomeView = new HomeView(obj);
        }
        

      },

      showWork: function(obj) {

        if(this.appWorkView) {
           this.appWorkView.render(obj);
        }
        else {
          this.appWorkView = new WorkView(obj);
        }
        

      },
      
      getPageModel: function(index) {

        var pageModel = this.pageCollection.findWhere({index: index});

        if(_.isUndefined(pageModel)) {
           pageModel = new PageModel();
        }

        return pageModel;

      }

     
      
  });
  
  var initialize = function(options){

      
        var approuter = new smartRouter();

        Backbone.history.start({ pushState: Modernizr.history, silent: true });


          if(!Modernizr.history) {

              var fragment = window.location.pathname.substr(
                    Backbone.history.options.root.length);

              if(fragment == '') {
                fragment = '#start';
              }

                Backbone.history.navigate(fragment, { trigger: true });


          } else {

              Backbone.history.loadUrl(Backbone.history.getFragment());

        }

  };


  return {
    initialize: initialize
  };
});











$( document ).ready(function() {

  

  $('body').on('click', 'a[data-link="internal"]', function(event){
   
    var href = $(this).attr("href");
    var protocol = this.protocol + "//";
    
   

    if (href && href.slice(0, protocol.length) !== protocol &&
        href.indexOf("javascript:") !== 0) {
    
      event.preventDefault();
      
      Backbone.history.navigate(href, true);

      // if(googleTracking == true) {
      //   var path = Backbone.history.getFragment();
      //   ga('send', 'pageview', {page: "/" + path});
      // }

    }


  });




});