const postcss = require('postcss');
const stylelint = require('stylelint');


// const css = `
//   .box {
//     width: 100px;
//     height: 100px;
//   }
// `;

// //parse the css into an ast
// const ast = postcss.parse(css);
// // modify without plugins
// ast.walkDecls(decl => {
//   if (decl.prop === 'width' && decl.value === '100px') {
//     decl.value = '200px';
//   }
// });
// //stringify the ast back to css
// const outputCss = ast.toString();


const css = `
  .box {
    width: 100px;
    height: 100px;
  }
`;

const ast = postcss.parse(css);
// modify without plugins
ast.walkDecls(decl => {
  if (decl.prop === 'width' && decl.value === '100px') {
    decl.value = '200px';
  }
});
const result = postcss().process(ast);

// Get the CSS code as a string using the postcss stringifier
const output = result.css;

console.log(output);










