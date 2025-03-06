import MiniCssExtractPlugin from "mini-css-extract-plugin";
function buildLoaders(options) {
    var isDev = options.mode == "development";
    var isProd = options.mode == "production";
    return [
        {
            test: /\.tsx?$/,
            use: [
                {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                }
            ],
            exclude: /node_modules/,
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                isProd ? MiniCssExtractPlugin.loader : "style-loader",
                { loader: "css-loader", options: { modules: true } },
                "sass-loader",
            ],
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        },
    ];
}
export default buildLoaders;
