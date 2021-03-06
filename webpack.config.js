const path = require('path')
const ExamplePlugin = require('./ExamplePlugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jpe?g$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new ExamplePlugin()
  ]
}
