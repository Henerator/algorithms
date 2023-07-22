const fs = require('fs');
const args = require('args');
const { colors, colorizeLog } = require('./scripts/console-colorize');

args.option('name', 'The name of new test file', '');
const options = args.parse(process.argv);

if (!options.name) {
  colorizeLog('The file name is required', colors.red);
  return;
}

const name = options.name;
const rootFolder = 'src/leetcode';
const testFolder = `${rootFolder}/${name}`;

createFolder(testFolder);
createFile(testFolder, name);
createSpecFile(testFolder, name);

function createFolder(name) {
  fs.mkdir(name, (err) => {
    if (err) return console.error(err);
    colorizeLog('Folder created', colors.green, name);
  });
}

function createFile(folder, name) {
  fs.writeFile(`${folder}/${name}.js`, '', function (err) {
    if (err) return console.error(err);
    colorizeLog('Filed created', colors.green, `${folder}/${name}.js`);
  });
}

function createSpecFile(folder, name) {
  const content = `const {  } = require('./${name}');

it('test 1', () => {
  const output = ;
  expect(output).toEqual();
});
`;

  fs.writeFile(`${folder}/${name}.spec.js`, content, function (err) {
    if (err) throw err;
    colorizeLog('Filed created', colors.green, `${folder}/${name}.spec.js`);
  });
}
