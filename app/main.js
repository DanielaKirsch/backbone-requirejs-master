

require.config({
  paths: {
    // libraries
    jquery: '../node_modules/jquery/dist/jquery',
    underscore: '../node_modules/underscore/underscore',
    backbone: '../node_modules/backbone/backbone',
    text: '../app/libs/text',
    TweenMax: '../app/libs/TweenMax',
    modernizr: '../app/libs/Modernizr'
    
  },
  shim: {
        backbone: {
            deps: ['jquery','underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        TweenMax: {
          deps: ['jquery']
        },
         modernizr : {
          exports: 'Modernizr'
        }
    },
  config: {

    'collections/PageCollection': {
            server_url: '/public/data/page.json'
    },

  }
  

});


require([
  'app',
], function(App){
        
  App.initialize();

});


