var app = require('./_config/app');

var
  gulp			    = require('gulp'),
  uglify			  = require('gulp-uglifyjs'),
  minify			  = require('gulp-minify-css'),
  rename        = require('gulp-rename'),
  sourcemaps    = require('gulp-sourcemaps'),
  concat        = require('gulp-concat'),
  concatSourcemap = require('gulp-concat-sourcemap'),
  less          = require('gulp-less'),
  replace       = require('gulp-replace');

gulp.task('dev-js', function () {
  return gulp.src(app.js)
    .pipe(concatSourcemap('dev.js'))
    .pipe(replace(/public\//g, '/'))
    .pipe(gulp.dest(paths.build));
});

gulp.task('dist-js', function() {
  return gulp.src(app.js)
    .pipe(uglify('dist.min.js', {
      outSourceMap: true
    }))
    .pipe(gulp.dest(paths.build));
});

gulp.task('dev-css', function () {
  return gulp.src(app.css)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('dev.css'))
    .pipe(sourcemaps.write('./', {sourceMappingURLPrefix:'/assets/build/'}))
    .pipe(gulp.dest(paths.build));
});

gulp.task('dist-css', ['dev-css'], function() {
  return gulp.src(paths.build + 'dev.css')
    .pipe(minify({
      keepSpecialComments: 0,
      noAdvanced: true
    }))
    .pipe(rename('dist.min.css'))
    .pipe(gulp.dest(paths.build));
});

gulp.task('dist', ['dist-css', 'dev-js', 'dist-js']);

gulp.task('dev', ['dev-css', 'dev-js'], function() {
  gulp.watch(app.js, ['dev-js']);
  gulp.watch(app.css, ['dev-css']);
  gulp.watch(paths.css+'**/*.less', ['dev-css']);
});