module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
        compile: {
            options: {
                sassDir: 'scss',
                cssDir: 'css',
                noLineComments: true
            }
        }
    },
    watch: {
        scripts: {
            files: ["scss/*.scss"],
            tasks: ["compass"],
            options: {
                spawn: false
            }
        }
    },
    concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: [
            // libs
            "js/vendors/jquery.js",
            "js/vendors/jquery.easings.min.js",
            "js/vendors/jquery.slimscroll.min.js",
            "js/vendors/jquery.fullPage.min.js",
            "js/vendors/swiper.min.js",

            // app
            "js/APP.js",
            "js/APP.facade.js",

            // utils
            "js/utils/APP.utils.js",

            // modules
            "js/modules/APP.modules.NavModule.js",
            "js/modules/APP.modules.RouterModule.js",
            "js/modules/APP.modules.ReviewsModule.js",
            "js/modules/APP.modules.OrderModule.js",
            "js/modules/APP.modules.SwitcherModule.js",
            "js/modules/APP.modules.LetterModule.js",
            "js/modules/APP.modules.SchemeModule.js",
            "js/modules/APP.modules.VideoModule.js",

          ],
          dest: "build/build.js",
        }
    },
    uglify: {
        my_target: {
          files: {
            "build/build.min.js": ["build/build.js"]          }
        }
    },
    cssmin: {
        options: {
          shorthandCompacting: false,
          roundingPrecision: -1
        },
        target: {
          files: {
            "build/build.min.css": ["css/style.css"]
          }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('prod', ['concat', 'uglify', 'cssmin']);

};