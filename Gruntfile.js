module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {   
				files: {
					'public/css/style.css': 'app/sass/style.scss',
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				//tasks: ['sass', 'cssmin','concat:app']
				tasks: ['sass', 'cssmin']
			
			},
			js: {
				files: 'app/**/*.js',
				tasks: ['requirejs']
			},
			templates: {
				files: 'app/**/*.html',
				tasks: ['requirejs']
			}
			
		},
  		cssmin: {
		  minify: {
		    expand: true,
		    cwd: 'public/css',
		    src: ['*.css', '!*.min.css'],
		    dest: 'public/css',
		    ext: '.min.css'
		  }
		},
		requirejs: {
          production: {
            options: {
              baseUrl: "./app",
              mainConfigFile: "app/main.js",
              name: 'app',
              out: "public/js/script.js",
              //optimize: 'uglify2',
               optimize: 'none',
              paths: {
                  requireLib: '../node_modules/grunt-contrib-requirejs/node_modules/requirejs/require'
              },
              include: ["requireLib"],
              generateSourceMaps: true,
              preserveLicenseComments: false
            }
          },
        }


	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.registerTask('default',['watch']);
	grunt.registerTask('once',['sass','cssmin','requirejs']);
}
