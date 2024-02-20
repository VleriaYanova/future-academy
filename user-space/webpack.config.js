import HtmlWebpackPlugin from "html-webpack-plugin";
import ModuleFederationPlugin from "webpack/lib/container/ModuleFederationPlugin"

module.exports = {
    mode: "development",
    devServer: {
        port: 3002,
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name: "userSpace",
            filename: "remoteEntry.js",

        })
    ],
}