var gulp = require('gulp');
var browserSync = require('browser-sync').create();

//Static Reload
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html',
    },
  });
  gulp.watch('index.html').on('change', browserSync.reload);
  gulp.watch('**/*.html').on('change', browserSync.reload);
  gulp.watch('**/*.css').on('change', browserSync.reload);
  gulp.watch('**/*.js').on('change', browserSync.reload);
});
