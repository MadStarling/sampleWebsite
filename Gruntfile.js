module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      concat: {
        dist: {
            src: ['js/src/*.js'],
            dest: 'js/main.js',
          }
      }
    });
  
    // Load the plugin that provides the "concat" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
  
    // Default task(s).
    grunt.registerTask('default', ['concat']);
  
};