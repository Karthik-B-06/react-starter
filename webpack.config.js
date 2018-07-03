var path = require("path");

module.exports = {
  // Sets the Entry Point of the App
  entry: {
    app: './src/app.js',
  },
  // The output file of the Complete App
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  // webpack-dev-server provides you with a simple web server 
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  module : {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js?$/,
        exclude: /(node_modules)/
      }, {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }  
};