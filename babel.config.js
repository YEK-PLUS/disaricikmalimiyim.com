module.exports = {
  env: {
    development: {
      presets: ['next/babel'],
    },
  },
  plugins: [
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    'add-react-displayname',
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './components',
            rootPathPrefix: '#/',
          },
          {
            rootPathSuffix: './containers',
            rootPathPrefix: '$/',
          },
          {
            rootPathSuffix: './',
            rootPathPrefix: '@/',
          },
        ],
      },
    ],
  ],
};
