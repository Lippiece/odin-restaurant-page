import path from "node:path";
import url from "node:url";
import glob from "glob";
import HtmlWebpackPlugin from  "html-webpack-plugin" ;

export default {
	mode     : "development",
	entry    : glob.sync( "./src/**/*.js" ),
	devtool  : "eval",
	devServer: { static: "./dist" },
	plugins  : [
		new HtmlWebpackPlugin( {
			title          : "Restaurant You'll Never Visit",
			templateContent: `
    <html>
      <body>
        <div id="content">
      </body>
    </html>
  `,
		} ),
	],
	output: {
		filename: "main.js",
		path    : path.resolve( path.dirname( url.fileURLToPath( import.meta.url ) ), "dist" ),
		clean   : true,
	},
	// Optimization: { runtimeChunk: "single" },
	module: {
		rules: [
			{
				test: /\.css$/i,
				use : ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
};