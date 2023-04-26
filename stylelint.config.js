module.exports = (options = {}) => {
  const [cwd, tailoredOptions] = isConfig(options)
    ? [process.cwd(), { config: options }]
    : [options.cwd || process.cwd(), options];
  const stylelint = createStylelint(tailoredOptions);

  return {
    postcssPlugin: 'stylelint',
    ruleName: 'my-custom-rule', // Add a unique ruleName property here
    Once(root, { result }) {
      let filePath = root.source && root.source.input.file;

      if (filePath && !path.isAbsolute(filePath)) {
        filePath = path.join(cwd, filePath);
      }

      return lintSource(stylelint, {
        filePath,
        existingPostcssResult: result,
      });
    },
  };
};
