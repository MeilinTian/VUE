const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js', // 入口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' // 出口
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
        }]
    }
};