var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var jade = require('gulp-jade');

//Static Reload
gulp.task('browser-sync', ['sass', 'jade'], function () {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html',
    },
  });
  gulp.watch('index.html').on('change', browserSync.reload);
  gulp.watch('**/*.sass', ['sass']);
  gulp.watch('**/*.jade', ['jade']);
});

gulp.task('jade', function () {
  return gulp.src('**/*.jade')
    .pipe(jade({
      pretty: true,
    }))
    .pipe(gulp.dest(''));
});

gulp.task('sass', function () {
  return gulp.src('**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest(''))
    .pipe(browserSync.stream());
});
