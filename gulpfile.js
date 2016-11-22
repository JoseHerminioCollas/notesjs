var gulp = require('gulp')
var jshint = require('gulp-jshint')
var mocha  = require('gulp-mocha')

var editFiles = ['goatstone/notes/mergeSort_.js', 'gulpfile.js', 'test/*.js']

gulp.task('default', function(){
    console.log('default')
})
gulp.watch(editFiles, ['lint', 'test'])
gulp.task('lint', function(){
    return gulp
    .src(editFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
})
gulp.task('test', function() {
    return gulp
        .src('test/*.js')
        .pipe(mocha());
});