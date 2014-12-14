
define([
  'underscore',
  'backbone',
  'models/PageModel',
  'module'
], function(_, Backbone, PageModel, module){
  
  var PageCollection = Backbone.Collection.extend({

    	model : PageModel,
      initialize: function(options) {
       this.url = module.config().server_url;
      }
  });
  return PageCollection;
});