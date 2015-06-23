/**
 * 
 * FILE: Grunt configuration
 * 
 * AUTHOR: Shaun Bent (http://www.shaunbent.co.uk)
 * DATE: 2013
 * VERSION 1.0
 * 
 */

module.exports = function(grunt) {

	grunt.initConfig({

        // style (Sass)
        sass: {
	        dist: {
		        options: {
			        style: 'compressed'
		        },
		        files: {
			        'assets/css/main.css' : 'assets/sass/main.scss',
                    'assets/css/main-old-ie.css' : 'assets/sass/main-old-ie.scss'
		        }
	        },
	        dev: {
		        options: {
			        style: 'expanded'
		        },
		        files: {
			        'assets/css/main.css': 'assets/sass/main.scss',
                    'assets/css/main-old-ie.css' : 'assets/sass/main-old-ie.scss'
		        }
	        }	        
        },

        // watch our project for changes
        watch: {
            sass: {
                files: [
                    'assets/sass/*.scss',
                    'assets/sass/**/*.scss'
                ],
                tasks: ['sass:dev']
            }
        }
    
    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // register task default task
    grunt.registerTask( 'default', [
        'sass:dev',
        'watch'
    ]);
};