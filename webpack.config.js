var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'dist/')
var APP_DIR = path.resolve(__dirname, 'goatstone')
var mainFileNames = [
    '/array-sort.js',
    '/notes/note.js'
]

var config = {
    entry: APP_DIR + mainFileNames[1],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
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
}

module.exports = config