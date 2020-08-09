'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsVendor: require('./gulp/paths/js.vendor.js'),
		cssVendor: require('./gulp/paths/css.vendor.js'),
		fontsVendor: require('./gulp/paths/fonts.vendor.js'),
    js: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
		'html:build',
		'fonts:build',
		'fonts:vendor',
    'js:vendor',
    'js:build',
    'image:build',
    'css:vendor',
    'sprite:svg'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
