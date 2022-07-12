/**
 * When passed a string, Glob will attempt to find each file that matches the
 * path given and return each path to the file as string[]
 */
import glob from "glob";
import path from "node:path";
/**
 * The Path API used to get the absolute path to the directory where we
 * plan to run Webpack
 */

export default {
/**
 * Pass Glob a relative path to each of our entry points
 * We will have different subdirectories inside of the Project directory so
 * we need to replace any of the directory names with a wildcard, **, which
 * will recursively match any combination of directory names inside of any
 * number of subdirectories until it finds the index.js entry.
 * Then we use the Array.prototype.reduce method to iterate through the array
 * and return an object containing a path to each of our entry files
 * (index.js)
 */
	entry: glob.sync( "./src/**/*.js" )
		.reduce( ( accumulator, path ) =>
		{
			const entry = path.replace( "/index.js", "" );

			accumulator[entry] = path;

			return accumulator;
		}, {} ),

	/**
	 * The "output" property is what our build files will be named and where the
	 * build file will be placed
	 */
	output: {
		/**
		 * Again, the "[name]" place holder will be replaced with each key in our
		 * "entry" object and will name the build file "main.js"
		 */
		filename: "./[name].main.js",
		path    : path.resolve( path.dirname( url.fileURLToPath( import.meta.url ) ), "dist" ),
	},
};