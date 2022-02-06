/* eslint-disable @typescript-eslint/no-var-requires */
const rules = require("./webpack.rules")
const plugins = require("./webpack.plugins")
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

rules.push({
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
    test: /\.jsx?$/,
    use: {
        loader: 'babel-loader',
        options: {
            exclude: /node_modules/,
            presets: ['@babel/preset-react']
        }
    }
})

module.exports = {
    // Put your normal webpack config below here
    module: {
        rules,
    },
    plugins: plugins,
    resolve: {
        plugins: [new TsconfigPathsPlugin({
            baseUrl:"src"
        })],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    }
};
