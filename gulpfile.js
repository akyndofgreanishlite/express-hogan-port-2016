var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('styles', function() {
  return sass('scss', { style: 'expanded' })
    .pipe(gulp.dest('public/stylesheets'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['public/stylesheets']);
});

// gulp.task('default', ['express', 'watch'], function() {
//
// });

var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(35729);
});

gulp.task('default', ['express', 'livereload', 'watch'], function() {

});

// gulp.task('express', function() {
//   var express = require('express');
//   var app = express();
//   app.use(require('connect-livereload')({port: 4002}));
//   app.use(express.static(__dirname));
//   app.listen(4000, '0.0.0.0');
// });
