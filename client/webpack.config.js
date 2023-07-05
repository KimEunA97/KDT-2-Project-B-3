// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerserPlugin = require('terser-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { GenerateSW } = require('workbox-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const WebpackPwaManifest = require('webpack-pwa-manifest');

const clientConfig = {
  entry: './src/index.tsx',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: 'file-loader',
      },
    ],
  },
  performance: {
    hints: false,
  },
  devServer: {
    historyApiFallback: true,
    port: 8085,
    hot: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'My App',
      short_name: 'App',
      description: 'My Progressive Web App',
      background_color: '#ffffff',
      theme_color: '#000000',
      start_url: '/',
      icons: [
        {
          src: path.resolve(__dirname, 'src', 'icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('assets', 'icons'),
        },
      ],
    }),
    new GenerateSW(),
  ],
};

const serverConfig = {
  entry: './src/test/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 콘솔 로그 제거
          },
          output: {
            comments: false, // 주석 제거
          },
        },
      }),
    ],
  },
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, './public'),
  },
  target: 'node',
};

module.exports = [clientConfig, serverConfig];
