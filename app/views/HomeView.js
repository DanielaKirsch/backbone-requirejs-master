define([
  'jquery',
  'underscore',
  'backbone',
  'TweenMax',
  'views/BaseView',
  'module',
  

], function($, _, Backbone,
	TweenMax,
	BaseView,
	module
	){
  
	var HomeView = Backbone.View.extend({

	el: 'body',
	events: {
  	
		
  	},
	
	initialize: function(options) {

		if(_.size(this.helperBasicView) <= 0) {
	  	  this.helperBaseView = new BaseView();

	  	}

	    this.render(options);


	},
	

	render: function(options) {

		// the base view is rendering everything
		this.helperBaseView.createPages(options);

	},
	
	
	});
	
	
	return HomeView;

});