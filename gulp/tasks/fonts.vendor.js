'use strict';

module.exports = function() {
  $.gulp.task('fonts:vendor', function() {
		return 	$.gulp.src($.path.fontsVendor)
			.pipe($.gulp.dest($.config.root + '/assets/fonts'));
  });
};