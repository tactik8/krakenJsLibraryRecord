
import path from "path";

const config = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.(js|jsx)$/i,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    path: path.resolve("./dist"),
    library: {
      name: "kraken_record",
      type: "var"
    }
  },
  plugins: []
};

export default config;