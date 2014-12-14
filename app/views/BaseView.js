define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/homePage.html',
  'text!templates/workPage.html',
  'text!templates/navigation.html',
  'module',
  

], function($, _, Backbone,
	
	homePage,
	workPage, 
	navigation,
	module
	){
  
	var BaseView = Backbone.View.extend({

	el: 'body',
	events: {
  	
		
  	},
	
	initialize: function(options) {

		this.viewnames = {
			homePage: homePage,
			workPage: workPage
		}

	},
	

	createPages: function(data) {
		
		var indexName = data.model.get('index'),
		templateName = this.viewnames[data.model.get('template')];

		// cache 
		if (!this.templates){ this.templates = {}; }

		var template = this.templates[indexName];

		if (!template){

			template = _.template( templateName, data);
			this.templates[indexName] = template;
		}

	    this.$el.html( template );
	   
	   // add navigation

	   navigation = _.template( navigation, data);
		
	   this.$el.find('.navigation').append( navigation );

	},
	
	
	});
	
	
	return BaseView;

});