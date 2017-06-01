'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /* Change these */
            width: 300
          }, {
            width: 550
          }, {
            width: 1140
          }, {
            width:200
          }]
        },
          files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'images/'
        }]
      }
    },
    clean: {
      dev: {
        src: ['images'],
      },
    },
    mkdir: {
      dev: {
        options: {
          create: ['imagesmall']
        },
      },
    },

  });
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);
};
