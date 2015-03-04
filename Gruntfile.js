'use strict';

module.exports = function (grunt) {

  /**
   * Reformat the uncompressed css output comments, make it usable. Easier than rewriting sass.
   */
  grunt.registerMultiTask('fixspacing', "Clean up the sass css output", function() {
    this.files.forEach(function(file) {
      var contents = file.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Coffin css "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        return grunt.file.read(filepath);
      }).toString().replace(/;\s+\/\*\s/gm, '; \/\* ');
      grunt.file.write(file.dest, contents);
    });
  });

  /**
   * Meat
   */
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourcemap: 'none',
        style: 'expanded',
        unixNewlines: true,
        precision: 10
      },
      dist: {
        files: { 'build/css/coffin.css': 'src/scss/coffin.scss' }
      }
    },
    csslint: {
      scssoutput: {
        options: {
          import: false,
          csslintrc: '.csslintrc'
        },
        src: ['build/css/coffin.css']
      }
    },
    cssmin: {
      compress: {
        files: { 'build/css/coffin.min.css': 'build/css/coffin.css' },
        compatibility: 'ie8'
      },
    },
    fixspacing: {
      files: { src: 'build/css/coffin.css', dest: 'build/css/coffin.css' }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('lint',  ['sass', 'fixspacing', 'csslint']);
  grunt.registerTask('default', ['sass', 'fixspacing', 'cssmin']);

};
