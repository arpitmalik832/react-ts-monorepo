const config = {
  prettier: true,
  svgo: true,
  exportType: 'named',
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  },
  titleProp: true,
  ref: true,
  outputDir: 'dist/assets',
  icon: false,
};

export default config;
