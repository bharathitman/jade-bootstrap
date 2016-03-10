var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

//Static Reload
gulp.task('browser-sync', ['sass'], function () {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html',
    },
  });
  gulp.watch('index.html').on('change', browserSync.reload);
  gulp.watch('**/*.sass', ['sass']);
});

gulp.task('sass', function () {
  return gulp.src('**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest(''))
    .pipe(browserSync.stream());
});
