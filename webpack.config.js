const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        file: './src/file.js',
        script: './src/script.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    }
}