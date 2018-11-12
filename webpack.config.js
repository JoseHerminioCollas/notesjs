const path = require('path')
const exec = require('child_process').exec;

const BUILD_DIR = path.resolve(__dirname, 'dist/')
const DIR_NAME = __dirname
const APP_DIR = path.resolve(DIR_NAME, 'goatstone')
const TEST_DIR = path.resolve(DIR_NAME, 'test')
const testFiles = ['note.test.js']
const mainFileNames = [
    '/notes/quick-sort.js',
    '/notes/note.js'
]
const testFile = path.resolve(TEST_DIR, testFiles[0])

const config = {
    entry: testFile,
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['eslint-loader']
            }

        ]
    }
    ,
    plugins: [
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
                    exec('node_modules/.bin/mocha test/' + testFiles[0], (err, stdout, stderr) => {
                        if (stdout) process.stdout.write(stdout);
                        if (stderr) process.stderr.write(stderr);
                    });
                });
            }
        }
    ]
}

module.exports = config
