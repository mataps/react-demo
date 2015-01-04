var app = require('./_config/app');

var
  gulp			    = require('gulp'),
  gutil         = require('gulp-util'),
  uglify			  = require('gulp-uglifyjs'),
  minify			  = require('gulp-minify-css'),
  rename        = require('gulp-rename'),
  sourcemaps    = require('gulp-sourcemaps'),
  concat        = require('gulp-concat'),
  concatSourcemap = require('gulp-concat-sourcemap'),
  less          = require('gulp-less'),
  replace       = require('gulp-replace'),
  source        = require('vinyl-source-stream'),
  buffer        = require('vinyl-buffer'),
  watchify      = require('watchify'),
  browserify    = require('browserify'),
  jest          = require('gulp-jest'),
  template      = require('gulp-template-compile');


gulp.task('dev-js', ['compile-tmpl'], function () {
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

gulp.task('compile-tmpl', function () {
  return gulp.src(app.tmpl)
    .pipe(template({
      name: function (file) {
        return file.relative.replace('.tmpl.html', '');
      }
    }))
    .pipe(concat('tmpl.js'))
    .pipe(gulp.dest(paths.build));
});

gulp.task('dist', ['dist-css', 'dev-js', 'dist-js']);

gulp.task('dev', ['dev-css', 'dev-js'], function() {
  gulp.watch(app.js, ['dev-js']);
  gulp.watch(app.css, ['dev-css']);
  gulp.watch(paths.tmpl, ['compile-tmpl']);
  gulp.watch(paths.css+'**/*.less', ['dev-css']);
});

gulp.task('jest', function () {
  return gulp.src('__tests__').pipe(jest({
    scriptPreprocessor: "./preprocessor.js",
    unmockedModulePathPatterns: [
      "node_modules/react"
    ],
    testDirectoryName: "components",
    testPathIgnorePatterns: [
      "node_modules",
      "spec/support"
    ],
    moduleFileExtensions: [
      "js",
      "json",
      "react"
    ]
  }));
});

gulp.task('r-dev', ['dev-css', 'r-libs', 'r-js'], function() {
  gulp.watch(app.css, ['dev-css']);
  gulp.watch(paths.css+'**/*.less', ['dev-css']);
  gulp.watch('./__app/**/*', ['r-js']);
});

gulp.task('r-libs', function () {
  return gulp.src(app.js)
    .pipe(concatSourcemap('libs.js'))
    .pipe(replace(/public\//g, '/'))
    .pipe(gulp.dest(paths.build));
});

gulp.task('r-js', function() {
  var bundler = browserify('./__app/main.js', {debug: true});

  return bundler.bundle()
    // log errors if they happen
    .on('error', function(err){
      gutil.log(err.message);
      this.emit('end');
    })
    .pipe(source('dev.js'))
    // optional, remove if you dont want sourcemaps
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    .pipe(sourcemaps.write('./')) // writes .map file
    //
    .pipe(gulp.dest(paths.build));
});