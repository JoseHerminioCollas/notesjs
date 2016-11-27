var gulp = require('gulp')
var babel = require('gulp-babel')
var webpack = require('webpack-stream')
const eslint = require('gulp-eslint')
var mocha = require('gulp-mocha')

var editFiles = ['goatstone/**/*.js', 'goatstone/**/*.jsx', 'gulpfile.js', 'test/*.js']

gulp.task('default', ['babel', 'wp'], function () {
    console.log('default')
})
gulp.watch(editFiles, ['lint', 'babel', 'wp'])

gulp.task('babel', function () {
    return gulp.src('goatstone/notes/note.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
})

gulp.task('wp', function () {
    return gulp.src('dist/note.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/wp/'))
})

gulp.task('lint', function () {
    return gulp
    .src(editFiles)
// eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError())
    //        .pipe(jshint())
    // .pipe(jshint.reporter('default'))
})
gulp.task('test', function () {
    return gulp
        .src('test/*.js')
        .pipe(mocha())
})
