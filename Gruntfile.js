module.exports = function (grunt) {
    // Grunt Configuration
    grunt.initConfig({
       less: {
          app: {
             files: {"src/styles.css": "src/styles.less"}
          }
       }
  });
  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-less");
  };