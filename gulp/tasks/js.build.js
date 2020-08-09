'use strict';

module.exports = function() {
  $.gulp.task('js:build', function() {
    return $.gulp.src($.path.js)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('main.js'))
      .pipe($.gp.uglify({toplevel: true}))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.rename({suffix: '.min'}))
      .pipe($.gulp.dest($.config.root + '/js'))
  })
};
