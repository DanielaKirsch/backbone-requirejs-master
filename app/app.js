
define([
  'jquery',
  'underscore',
  'backbone',
  'router/AppRouter'
  
], function($, _, Backbone, AppRouter){
  var initialize = function(){

    AppRouter.initialize();

  }

  return {
    initialize: initialize
  };
});