const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name: "host",
            filename: "remoteEntry.js",
            remotes: {
                adminSpace: "adminSpace@http://localhost:3001/remoteEntry.js"
            },
        }),
    ],
}