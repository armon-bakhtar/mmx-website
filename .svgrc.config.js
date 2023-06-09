module.exports = {
  prettierConfig: {
    parser: 'typescript',
    arrowParens: 'always',
    bracketSameLine: false,
    bracketSpacing: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 80,
  },
  svgoConfig: {
    plugins: [
      {
        name: 'removeViewBox',
        active: false,
      },
    ],
  },
};

