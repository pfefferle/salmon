module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    wp_readme_to_markdown: {
      target: {
        files: {
          'README.md': 'readme.txt'
        },
      },
    },

    makepot: {
      target: {
        options: {
          mainFile: 'salmon.php',
          domainPath: '/languages',
          exclude: ['bin/.*', '.git/.*', 'vendor/.*', 'node_modules/.*'],
          potFilename: 'salmon.pot',
          type: 'wp-plugin',
          updateTimestamp: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-wp-readme-to-markdown');
  grunt.loadNpmTasks('grunt-wp-i18n');

  // Default task(s).
  grunt.registerTask('default', ['wp_readme_to_markdown', 'makepot']);
};
