'use strict';

module.exports = function() {
  $.gulp.task('js:vendor', function() {
    return $.gulp.src($.path.jsVendor)
			.pipe($.gp.concat('vendor.js'))
			.pipe($.gp.rename({suffix: '.min'}))
      .pipe($.gulp.dest($.config.root + '/js'))
  })
};
