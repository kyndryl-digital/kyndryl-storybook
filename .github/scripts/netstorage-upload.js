const { promisify } = require('util');
const path = require('path');
const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const Netstorage = require('netstorageapi')
 
const config = {
  hostname: '${NETSTORAGE_HOST_NAME}',
  keyName: '${NETSTORAGE_KEY_NAME}',
  key: '${NETSTORAGE_API_KEY}',
  cpCode: '${NETSTORAGE_CP_CODE}',
  ssl: false
}
const arguments = process.argv.slice(2)
const buildDirectory = arguments[0] ? arguments[0] : "build";

const ns = new Netstorage(config)


async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = path.resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.reduce((a, f) => a.concat(f), []);
}


arrayOfFiles = getFiles(buildDirectory)
	.then(function(files){
		files.forEach((file) => {
			ns.upload(file, config.cpCode + '/' + path.relative(buildDirectory, file), (error, response, body) => {
				
			  if (error) {
				console.log(`NetStorage Upload Error: ${error.message}`)
			  }
			  if (response.statusCode == 200) {
				console.log(config.cpCode + '/' + path.relative(buildDirectory, file) + " uploaded")
			  } 
			  else {
				  console.log('HTTP Error: ' + response.statusCode + ": " + config.cpCode + '/' + path.relative(buildDirectory, file))
			  }
			});
		})
	})
	.catch(e => console.error(e));

