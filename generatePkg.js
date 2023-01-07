import fs from 'fs'

fs.writeFileSync(`./build/compiled/package.json`, JSON.stringify({
	"name": `dunchess-api`,
	"version": `1.0.0`,
	"type": `module`,
	"test": `test`,
}))
