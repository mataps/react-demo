var app = require('./_config/app');

var
  gulp			    = require('gulp'),
  uglify			  = require('gulp-uglifyjs'),
  minify			  = require('gulp-minify-css'),
  rename        = require('gulp-rename'),
  concat		    = require('gulp-concat-sourcemap')
  replace       = require('gulp-replace');

gulp.task('dev-js', function () {
  return gulp.src(app.js)
    .pipe(concat('dev.js'))
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
    .pipe(concat('dev.css'))
    .pipe(replace(/public\//g, '/'))
    .pipe(replace(/\/\*# sourceMappingURL=bootstrap.css.map \*\//, ''))
    .pipe(gulp.dest(paths.build));
});

gulp.task('dist-css', ['dev-css'], function() {
  return gulp.src(paths.build + 'dev.css')
    .pipe(minify({
      keepSpecialComments: 0,
      noAdvanced: true
    }))
    .pipe(rename('dev.min.css'))
    .pipe(gulp.dest(paths.build));
});

gulp.task('dist', ['dist-css', 'dev-js', 'dist-js']);

gulp.task('dev', ['dev-css', 'dev-js'], function() {
  gulp.watch(app.js, ['dev-js']);
  gulp.watch(app.css, ['dev-css']);
});