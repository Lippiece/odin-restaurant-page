import path from "node:path";
import url from "node:url";
import glob from "glob";
import HtmlWebpackPlugin from  "html-webpack-plugin" ;

export default {
	entry    : glob.sync( "./src/**/*.js" ),
	// Entry    : "/src/main/script.js",
	mode     : "production",
	devtool  : "source-map",
	devServer: { static: "./dist" },
	plugins  : [
		new HtmlWebpackPlugin( {
			title          : "The Phylosophy Ingredient",
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
				test: /\.(png|svg|jpg|jpeg|gif|jfif)$/i,
				type: "asset/resource",
			},
		],
	},
};