var gulp = require('gulp')
const eslint = require('gulp-eslint');
// var jshint = require('gulp-jshint')
var mocha  = require('gulp-mocha')

var editFiles = ['goatstone/**/*.js', 'gulpfile.js', 'test/*.js']

gulp.task('default', function(){
    console.log('default')
})
gulp.watch(editFiles, ['lint', 'test'])
gulp.task('lint', function(){
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
        .pipe(eslint.failAfterError());
    //        .pipe(jshint())
    //.pipe(jshint.reporter('default'))
})
gulp.task('test', function() {
    return gulp
        .src('test/*.js')
        .pipe(mocha());
});