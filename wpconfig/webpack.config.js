// The value 'production' depends on what NODE_ENV is set when running Webpack
// to compile the production bundle
const IS_DEV = process.env.NODE_ENV !== 'production';

import {AotPlugin} from '@ngtools/webpack'

exports = { /* ... */
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack',
      }
    ]
  },

  plugins: [
    new AotPlugin({
      tsConfigPath: './tsconfig-prod.json',
      entryModule: path.resolve(__dirname, './src/app/app.module#AppModule')
    })
  ]
}