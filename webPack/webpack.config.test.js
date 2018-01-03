import path from 'path';
import dotenv from 'dotenv';
import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import CleanPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// Constants ------------------------------------

const ENV = { ...dotenv.config(), NODE_ENV: process.env.NODE_ENV };
const IS_PROD = ENV.NODE_ENV === 'production';
const SRC = 'src';
const ASSETS = 'assets';
const DIST = 'dist';

// Utilities ------------------------------------

const dirname = p => path.join(__dirname, p);
const src = (p = '') => dirname(SRC, p);
const dist = (p = '') => dirname(DIST, p);

// Configuration ------------------------------------

const devtool = IS_PROD ? 'source-map' : 'eval';

const stats = {
  children: false
};

const entry = {
  app: src('index.js')
};

const output = {
  path: dist(),
  filename: 'app.bundle.js'
};

const devServer = IS_PROD
  ? undefined
  : {
    host: '0.0.0.0',
    port: 3000,
    colors: true,
    historyApiFallback: true,
    contentBase: dist(),
    outputPath: dist(),
    proxy: {
      '/api/*': 'http://localhost:8888'
    }
  };

const module = {
  loaders: [
    {
      test: /\.js$/,
      include: [src()],
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread'],
        babelrc: false
      }
    },
    {
      test: /\.css$/,
      include: [src()],
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules')
    }
  ]
};

const plugins = [
  new webpack.DefinePlugin({
    'process.env': Object.keys(ENV).reduce(
      (acc, k) => ({ ...acc, [`${k}`]: JSON.stringify(ENV[k]) }),
      {}
    )
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.bundle.js',
    minChunks: ({ resource }) => resource && resource.startsWith(dirname('node_modules'))
  }),
  new ExtractTextPlugin('styles.css'),
  new HtmlPlugin({
    title: '',
    inject: false,
    template: path.join('node_modules', 'html-webpack-template', 'index.ejs'),
    hash: true,
    appMountId: 'root',
    mobile: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true
    }
  }),
  new CopyPlugin([
    {
      from: ASSETS,
      to: ASSETS
    }
  ]),
  new webpack.NoErrorsPlugin()
];

if (IS_PROD) {
  plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new CleanPlugin([DIST]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
}

// Export ------------------------------------

export default {
  devtool,
  stats,
  entry,
  output,
  devServer,
  module,
  plugins
};
