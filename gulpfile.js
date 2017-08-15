var gulp = require('gulp')
var webpack = require('webpack-stream')
const eslint = require('gulp-eslint')
var mocha = require('gulp-mocha')
var exec = require('child_process').exec

var editFiles = [
    'goatstone/**/*.js',
    'goatstone/**/*.jsx',
    'gulpfile.js',
    'test/**/*.js',
    'webpack.config.js'
]

gulp.task('watchnotes', function () {
    gulp.watch(editFiles, ['lint-note', 'test'])
})
gulp.task('lint-note', function () {
    return gulp
    .src(['goatstone/notes/note.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
})

gulp.task('notes', ['lint', 'watchfiles', 'webpack', 'appengine', 'browser-sync'], function () {
    // const noteFiles = ['goatstone/notes/note.js', 'test/note.test.js']
    // gulp.watch(editFiles, ['lint', 'test', 'webpack'])
    console.log('notes')
})
gulp.task('default', ['lint', 'watchfiles', 'test', 'webpack', 'appengine', 'browser-sync'], function () {
    console.log('default')
})
gulp.task('watchfiles', function () {
    gulp.watch(editFiles, ['lint', 'test', 'webpack'])
})
gulp.task('travis', ['lint', 'test', 'webpack', 'appengine'], function () {
    console.log('travis task')
})
gulp.task('test-note', function () {
    const noteTestFiles = [
        'test/note.test.js'
    ]
    return gulp
        .src(['test/setup.js', noteTestFiles[0]])
        .pipe(mocha())
})
gulp.task('node-serve', function () {
    var Server = require('goatstone/server/one.js')
    var s = new Server()
    s.start()
})
gulp.task('start-server', function () {
    var cmd = 'node /home/goat/projects/notesjs/goatstone/server/one.js'
    exec(cmd,
    (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
        if (error !== null) {
            console.log(`exec error: ${error}`)
        }
    })
})
gulp.task('webpack', function () {
    return gulp.src('dist/note.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/js'))
})
gulp.task('htmlpack', function () {
    return gulp.src('goatstone/server/index.html')
        .pipe(gulp.dest('dist/'))
})
gulp.task('appengine', function () {
    return gulp.src('goatstone/server/appengine/*')
        .pipe(gulp.dest('dist/'))
})
// appengine server files
gulp.task('browser-sync', function () {
    const cmd = '/home/goat/projects/notesjs/node_modules/browser-sync/bin/browser-sync.js start -f /home/goat/projects/notesjs/dist/'
    exec(cmd,
        (error, stdout, stderr) => {
            console.log(`stdout: ${stdout}`)
            console.log(`stderr: ${stderr}`)
            if (error !== null) {
                console.log(`exec error: ${error}`)
            }
        })
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
    // const testFiles = [
    //     'test/*.js',
    //     'test/note.test.js',
    //     'test/sort.selection.test.js',
    //     'test/react-component.test.js',
    //     'test/ui.array-sort.test.js',
    //     'test/make-a-list/ui/toolbar.test.js',
    //     'test/list-make.test.js',
    //     'test/make-a-list/ui/make-list-control.test.js',
    //     'test/make-a-list/ui/material-app-demo.test.js'
    // ]
    const testFiles2 = [
        'test/setup.js',
        'test/note.test.js'
    ]
    return gulp
        .src(testFiles2)
        .pipe(mocha())
})
gulp.task('run-notes', function () {
    var cmd = 'node /home/goat/projects/notesjs/goatstone/notes/note.js'
    exec(cmd,
    (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`)
        console.log(`stderr: ${stderr}`)
        if (error !== null) {
            console.log(`exec error: ${error}`)
        }
    })
})
