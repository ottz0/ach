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
          // middleware: function(connect, options) {
          //   var middlewares = [];

          //   middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]'])); //Matches everything that does not contain a '.' (period)
          //   options.base.forEach(function(base) {
          //     middlewares.push(connect.static(base));
          //   });
          //   return middlewares;
          // }
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

    
    clean: {
        src: ['dist/index.html', 'dist/app', 'dist/eanapi', 'dist/assets']
    },


    copy: { 

        core: {
            files: [{
                expand: true,
                cwd: 'src',
                src: [
                    'eanapi/*'
                ],
                dest: 'dist'
            }],
        },

        shared:{
            files: [{
                expand: true,
                cwd: 'src/app/shared',
                src: [
                    '**/*.html',
                ],
                dest: 'dist/app/shared'
            }],
        },
        
        components:{
            files: [{
                expand: true,
                cwd: 'src/app/components',
                src: [
                    '**/*.html',
                ],
                dest: 'dist/app/components'
            }],
        },

        img:{
            files: [{
                expand: true,
                cwd: 'src/assets/img',
                src: [
                    '**',
                ],
                dest: 'dist/assets/img'
            }],
        },

        octicons:{
            files: [{
                expand: true,
                cwd: 'src/assets/libs/octicons/octicons',
                src: [
                    'octicons-local.ttf',
                    'octicons.eot',
                    'octicons.ttf',
                    'octicons.svg',
                    'octicons.ttf',
                    'octicons.woff',
                ],
                dest: 'dist/assets/fonts/octicons/octicons'
            }],
        },

        octiconsSvg:{
            files: [{
                expand: true,
                cwd: 'src/assets/libs/octicons/svg',
                src: ['**.svg',],
                dest: 'dist/assets/fonts/octicons/svg'
            }],
        },
    },

    
    cssmin: {
      main: {
        files: [{
          expand: true,
          cwd: 'src/assets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/assets/css',
          ext: '.min.css'
        }]
      },

      octicons: {
        files: [{
          expand: true,
          cwd: 'src/assets/libs/octicons/octicons',
          src: ['octicons.css'],
          dest: 'dist/assets/fonts/octicons/octicons',
          ext: '.min.css'
        }]
      },
      
    },

    
    uglify: {
        vendor: {
          files: {
            'dist/app/js/vendor.min.js': 
                [
                  'src/assets/libs/jquery/dist/jquery.min.js',
                  'src/assets/libs/tether/dist/js/tether.min.js',
                  'src/assets/libs/bootstrap/dist/js/bootstrap.min.js',
                ]
          },
        },

        angular: {
          files: {
            'dist/app/js/angular.min.js': 
                [
                  'src/assets/libs/angular/angular.min.js',
                ]
          },
        },

        achSite: {
          files: {
            'dist/app/js/ach-site.min.js': 
                [
                  'src/assets/js/google.js',
                  'src/assets/js/ach-site.js',
                  'src/assets/js/bootstrap-datepicker.js',
                ]
          },
        },

        angularComponents: {
          files: {
            'dist/app/js/angular-components.min.js': 
                [
                  'src/assets/libs/angular-ui-router/release/angular-ui-router.min.js',
                  'src/assets/libs/angular-sanitize/angular-sanitize.min.js',
                  'src/assets/libs/ngstorage/ngStorage.min.js',
                  'src/assets/libs/angular-spinners/dist/angular-spinners.min.js',
                  'src/assets/libs/angular-slugify/angular-slugify.js',
                  'src/assets/libs/angular-auto-validate/dist/jcs-auto-validate.min.js',
                  'src/assets/libs/angular-guid/guid.min.js',
                  'src/assets/libs/ngmap/build/scripts/ng-map.min.js',
                ]
          },
        },
        
        angularApp: {
            files: {
              'dist/app/js/angular-app.min.js': 
                  [
                    'src/app/app.js', 
                    'src/assets/js/**.js', 
                    'src/app/shared/**/**.js',
                    'src/app/components/**/**.js'
                  ]
            },  
        },
    },


   processhtml: {
        build: {
            nonull: true,
            files: {
                'dist/index.html' : ['src/index.html'],
            }
        }
    },
  
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-processhtml');

 


  // Run default task for src to build
  grunt.registerTask('server', ['connect','watch']);

  //Run the distribution
  //grunt.registerTask('dist', ['clean', 'copy', 'cssmin', 'uglify', 'processhtml']);
  grunt.registerTask('dist', ['clean', 'uglify', 'processhtml', 'copy', 'cssmin']);



};