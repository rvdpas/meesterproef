var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');

gulp.task('sass', function() {
  return gulp.src('resources/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('resources/scss/**/*.scss', ['sass']);
  gulp.watch('resources/js/**/*.js', browserSync.reload);
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'meesterproef'
    },
  })
})

gulp.task('useref', function(){
  return gulp.src('resources/*.scss')
    .pipe(useref())
    .pipe(gulp.dest('public/css'))
});
