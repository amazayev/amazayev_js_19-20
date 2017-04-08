module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
        dist: {
          src: ['style/slider.scss', 'style/style.scss', 'style/header.scss', 'style/footer.scss'],
          dest: 'style/main.scss'
        }
      },
sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'style',
        src: ['main.scss'], // компилируем конкретный файл
        dest: 'style',
        ext: '.css'
      }]
    }
  },
  watch: {
    sass: {
      files: ['style/*.scss'],
      tasks: ['concat', 'sass'],
      },
    }
});

  grunt.loadNpmTasks('grunt-contrib-concat'); //объежинение файлов
  grunt.loadNpmTasks('grunt-contrib-uglify'); //минимизация (сжатие) файлов
  grunt.loadNpmTasks('grunt-contrib-sass'); // sass
  grunt.loadNpmTasks('grunt-contrib-watch'); //автоматическое выполнение при внесении изменений в файл.  grunt watch - вызов фоновой команды


  grunt.registerTask('default', ['concat', 'sass']);

};
