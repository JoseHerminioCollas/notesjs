/* gulpfile.js */
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var react = require('gulp-react');  
var concat = require('gulp-concat'), 
  source = require('vinyl-source-stream'),  
  buffer = require('vinyl-buffer'),
  sourcemaps = require('gulp-sourcemaps'),
  babelify = require('babelify'),
  gulp  = require('gulp'),
  gutil = require('gulp-util'),
  jshint = require('gulp-jshint'),
  concat  = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  browserify = require('browserify'),
  streamify = require('gulp-streamify');

var browserSync = require('browser-sync').create();

var input  = {
  'javascript': 'goatstone/notes/note.js',
  'html': 'goatstone/notes/index.html',
  'test': 'test/**/*.{html,js}'
};

gulp.task('default', ['build', 'watch', 'browser-sync']);

gulp.task('watch', function() {
  gulp.watch(input.javascript, [ 'jshint', 'build' ] );  
});

gulp.task('jshint', function() {
  var aSrc = input.javascript
  return gulp.src( aSrc )
   .pipe(react())
    .pipe(jshint(
      {
        esnext:true, 
        asi:true
      }))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build', [ 'browserifyBundle', 'buildHTML' ] );

gulp.task('buildHTML', function(){
    return gulp.src( input.html )         
        .pipe(gulp.dest('./dist/'));
});

gulp.task('browserifyBundle', function(){
  return browserify( {
      entries: [input.javascript],
      debug: true
    } )
    .transform( babelify )
    //.transform(reactify)
    .bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error') )
    .pipe( source('js/bundle.js') )
    .pipe( buffer() )
    .pipe( sourcemaps.init({loadMaps: true}) )  
    .pipe( sourcemaps.write('./') )  
    .pipe( gulp.dest('./dist') );
});

gulp.task('test', function () {
    return gulp
    .src('test/runner.html')
    .pipe(mochaPhantomJS());
});

// Static server
gulp.task('browser-sync', function() {
    return browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
});