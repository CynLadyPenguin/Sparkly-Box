const postcss = require('postcss');
const stylelint = require('stylelint');

const css = `
  .box {
    width: 100px;
    height: 100px;
  }
`;

postcss([
  stylelint({
    rules: {
      // Specify your stylelint rules here
      'declaration-property-value': {
        'width': ['100px']
      }
    }
  }),
  function (root) {
    root.walkRules(rule => {
      if (rule.selector === '.box') {
        rule.walkDecls(decl => {
          if (decl.prop === 'width') {
            decl.value = '200px';
          }
        });
      }
    });
  }
])
.process(css, { from: undefined })
.then(result => {
  console.log(result.css);
})
.catch(error => {
  console.error(error);
});














