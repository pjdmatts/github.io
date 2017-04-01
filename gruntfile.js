module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1024,
            suffix: '_large_2x',
            quality: 50
          }, {
            width: 960,
            suffix: '_large_1x',
            quality: 50
          }, {
            width: 768,
            suffix: 'medium',
            quality: 50
          },{
            width: 426,
            suffix: 'small',
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
