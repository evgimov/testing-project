var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var gutil = require('gulp-util');


// options for browserSync
var browserSyncConfig = {
  server: {
    baseDir: "./"
  }
};

var reload = function() {
  browserSync.reload();
};

gulp.task('sass', function() {
  return gulp.src('assets/sass/styles.scss')
      .pipe(sass())
      .pipe(gulp.dest('assets/css/'))
      .on('error', sass.logError);
});

gulp.task('serve', function() {
   browserSync.init(browserSyncConfig);

  gulp.watch('assets/sass/_custom.scss', ['sass']);
  gulp.watch(['index.html','assets/css/styles.css'], reload);
});


