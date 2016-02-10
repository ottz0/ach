module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	
    sass: {
      app: {
        options: {
          style: 'expanded'
        },
        files: {
          'src/assets/css/ach-main.css': 'src/assets/sass/ach-main.scss'
        }
      }
    },

    connect: {
      options: {
        port: 8080,
        livereload: 35729,
        hostname: 'localhost',
        base: 'src'
      },
      livereload: {
        options: {
          open: true
        },

        // MODIFIED: Add this middleware configuration
          middleware: function(connect, options) {
            var middlewares = [];

            middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]'])); //Matches everything that does not contain a '.' (period)
            options.base.forEach(function(base) {
              middlewares.push(connect.static(base));
            });
            return middlewares;
          }
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      sass: {
        files: ['src/assets/sass/*.scss', 'src/assets/sass/**/**/*.scss'],
        tasks: ['sass:app'],
      },
      js: {
        files: ['src/app/**/**/**/*.js'],
      },
      html: {
        files: ['src/index.html', 'src/app/**/**/**/*.html', 'src/app/**/**/*.html'],
      }
    },


  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
 


  // Run default task for src to build
  grunt.registerTask('server', ['connect','watch']);

  //Run the distribution
  grunt.registerTask('dist', ['connect']);



};