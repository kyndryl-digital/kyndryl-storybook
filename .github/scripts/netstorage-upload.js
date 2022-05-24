const { promisify } = require('util');
const path = require('path');
const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const commandLineArgs = require('command-line-args')
const optionDefinitions = [
	{name: 'sourceDir', type: String},
	{name: 'destinationDir', type: String},
]
const options = commandLineArgs(optionDefinitions)

const Netstorage = require('netstorageapi')

const config = {
  hostname: '${NETSTORAGE_HOST_NAME}',
  keyName: '${NETSTORAGE_KEY_NAME}',
  key: '${NETSTORAGE_API_KEY}',
  cpCode: '${NETSTORAGE_CP_CODE}',
  ssl: false
}
const sourceDir = options.sourceDir ? options.sourceDir : "build"
const destinationDir = options.destinationDir ? config.cpCode + '/' + options.destinationDir + '/' : config.cpCode + '/'

const ns = new Netstorage(config)

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = path.resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.reduce((a, f) => a.concat(f), []);
}

arrayOfFiles = getFiles(sourceDir)
	.then(function(files){

		files.forEach((file) => {
			ns.upload(file, destinationDir + path.relative(sourceDir, file), (error, response, body) => {
				
			  if (error) {
				console.log(`NetStorage Upload Error: ${error.message}`)
			  }
			  if (response.statusCode == 200) {
				console.log(destinationDir + path.relative(sourceDir, file) + " uploaded")
			  } 
			  else {
				  console.log('HTTP Error: ' + response.statusCode + ": " + destinationDir + path.relative(sourceDir, file))
			  }
			});
		})
	})
	.catch(e => console.error(e));

