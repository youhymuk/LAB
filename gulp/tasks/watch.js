'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./src/js/**/*.js', $.gulp.series('js:build'));
    $.gulp.watch('./src/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./src/**/*.html', $.gulp.series('html:build'));
    $.gulp.watch('./src/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./src/img/**/*.*', $.gulp.series('image:build'));
    $.gulp.watch('./src/fonts/**/*.*', $.gulp.series('fonts:build'));
  });
};
