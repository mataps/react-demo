module.exports = {
	entry: './__app/main.js',
  output: {
  	path: './public/assets/build', // This is where images AND js will go
    publicPath: '/assets/', // This is used to generate URLs to e.g. images
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      { test: /\.css/, loader: "style-loader!css-loader" },
      { test: /\.gif/, loader: "url-loader?limit=10000&minetype=image/gif" },
      { test: /\.jpg/, loader: "url-loader?limit=10000&minetype=image/jpg" },
      { test: /\.png/, loader: "url-loader?limit=10000&minetype=image/png" },
      { test: /\.jsx?$/, loader: "jsx-loader" }
    ]
  },
  resolve : {
    alias: {

    },
    extensions: ['', '.js', '.jsx']
  }
};