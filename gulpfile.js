'use strict';

var gulp          = require('gulp');
var util          = require('gulp-util');
var assign        = require('object-assign');
var rename        = require('gulp-rename');
var stream        = require('vinyl-source-stream');
var buffer        = require('vinyl-buffer');
var babelify      = require('babelify');
var watchify      = require('watchify');
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var sourceMaps    = require('gulp-sourcemaps');
var del           = require('del');
var concat        = require('gulp-concat');
var browserify    = require('browserify');
var browserSync   = require('browser-sync');


//
// Configuration

var source = 'src/';
var build = 'build/';

var src = {
  html: source + 'html/**/*.html',
  svg: source + 'svg/**/*.svg',
  scss: source + 'css/**/*.scss',
  js: source + 'js/main.js'
};

var out = {
  html: build,
  svg: build + 'svg/',
  css: build + 'css/',
  js: build + 'js/'
};


//
// Browserify

var bundler = watchify(browserify(src.js, assign(watchify.args, { debug: true })));

bundler.transform(babelify.configure({
  compact: false,
  optional: ['es7.decorators']
}));

function bundle() {

  var handleError = function (error) {
    util.log(error.message);
    browserSync.notify('Browserify Error!');
    this.emit('end');
  };

  return bundler.bundle()
    .on('error', handleError)
    .pipe(stream('app.js'))
    .pipe(buffer())
    .pipe(sourceMaps.init({ loadMaps: true }))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest(out.js))
    .pipe(browserSync.reload({ stream: true, once: true }));
}

bundler.on('update', bundle);


//
// Tasks

gulp.task('html', function () {
  return gulp.src(src.html)
    .pipe(gulp.dest(out.html));
});

gulp.task('svg', function () {
  return gulp.src(src.svg)
    .pipe(gulp.dest(out.svg));
});

gulp.task('normalize', function () {
  var main = require('normalize.css/package.json').main;

  return gulp.src('node_modules/normalize.css/' + main)
    .pipe(rename('css/normalize.scss'))
    .pipe(gulp.dest(source));
});

gulp.task('sass', ['normalize'], function () {
  return gulp.src(src.scss)
    .pipe(sourceMaps.init())
    .pipe(sass({ outputStyle: 'nested' }))
    .pipe(concat('app.css'))
    .pipe(sourceMaps.write({ includeContent: false }))
    .pipe(sourceMaps.init({ loadMaps: true }))
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest(out.css))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('browserify', function () {
  return bundle();
});

gulp.task('clean', function () {
  return del(['build/**/*']);
});

gulp.task('serve', ['html', 'svg', 'sass', 'browserify'], function () {
  browserSync({ server: build });

  gulp.watch(src.scss, ['sass']);
  gulp.watch([src.html, src.svg]).on('change', browserSync.reload);
});
