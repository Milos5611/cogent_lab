// production config
const commonConfig = require("./common");

module.exports = merge(commonConfig, {
    entry: "./app.js",
    output: {
        filename: "bundle.[hash].min.js",
        path: resolve(__dirname, "../../build"),
        publicPath: "/"
    },
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            "window.com.cogent": {
                NODE_ENV: JSON.stringify("production"),
                BASE_URL: JSON.stringify("https://api.foursquare.com/v2/venues/explore")
            }
        })
    ]
});
