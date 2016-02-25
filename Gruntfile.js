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

    //Tasks for distribution
    // copy:{
    //   dist:{
    //     files: [
    //       {nonull: true, expand: true, cwd: 'src', src: 'index.html', dest: 'dist'},
    //       {nonull: true, expand: true, cwd: 'src', src: 'eanapi/**', dest: 'dist'},
    //     ],
    //   },  
    // },

    clean: {
        src: ['dist/index.html']
    },


    copy: {
        dist: {
            files: [{
                expand: true,
                cwd: 'src',
                src: [
                    'index.html',
                    'eanapi/*'
                    //'foo/*.{png,jpg}',
                    //'foo/*.{png,jpg}',
                ],
                dest: 'dist'
            }],
        },
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'release/css',
          src: ['*.css', '!*.min.css'],
          dest: 'release/css',
          ext: '.min.css'
        }]
      }
    },

  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
 


  // Run default task for src to build
  grunt.registerTask('server', ['connect','watch']);

  //Run the distribution
  grunt.registerTask('dist', ['clean', 'copy']);



};