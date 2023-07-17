const fs = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('File name: ', (name) => {
  const rootFolder = 'src/leetcode';
  const testFolder = `${rootFolder}/${name}`;

  createFolder(testFolder);
  createFile(testFolder, name);
  createSpecFile(testFolder, name);

  readline.close();
});

function createFolder(name) {
  fs.mkdir(name, (err) => {
    if (err) return console.error(err);
    console.log(`Directory ${name} created`);
  });
}

function createFile(folder, name) {
  fs.writeFile(`${folder}/${name}.js`, '', function (err) {
    if (err) return console.error(err);
    console.log(`File ${folder}/${name}.js created`);
  });
}

function createSpecFile(folder, name) {
  const content = `
    const {  } = require('./${name}');

    it('test 1', () => {
      const output = ;
      expect(output).toEqual();
    });
  `;

  fs.writeFile(`${folder}/${name}.spec.js`, content, function (err) {
    if (err) throw err;
    console.log(`File ${folder}/${name}.spec.js created`);
  });
}
