const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/ux.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts'],
        alias: {
            '@ux2': path.resolve(__dirname, 'src/')
        }
    },
    output: {
        filename: 'ux.js',
        path: path.resolve(__dirname, 'dist/')
    }
};
