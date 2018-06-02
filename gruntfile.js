module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
        dist: {
          options:{
            style:'compressed'
          },
          files: {
            'css/style.css' : 'scss/style.scss'
          }
        }
      },
      autoprefixer:{
        dist:{
          files:{
            'css/style.css':'css/style.css'
          }
        }
      },
      watch: {
        css: {
          files: 'scss/*.scss',
          tasks: ['sass', 'autoprefixer']
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default',['watch']);
  }