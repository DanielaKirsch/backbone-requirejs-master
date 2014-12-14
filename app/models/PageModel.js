define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var PageModel = Backbone.Model.extend({
  
  	initialize: function(models, options) {
  		
    },
    defaults: {
      index: 'homepage',
      template: 'homePage',
      link: "/"
    }

  });
  
  return PageModel;

});