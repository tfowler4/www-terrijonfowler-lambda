const path = require('path');

module.exports = {
    entry: './src/js/react.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
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
                test: /\.css$/,
                exclude: /node_modules/, 
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                    
                ] 
            }
        ]
    },
    watch: false,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};