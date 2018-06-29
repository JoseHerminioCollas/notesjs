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
    module: {
        loaders: [{
            test: /\.js?/,
            include: APP_DIR,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}

module.exports = config