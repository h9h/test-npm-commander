const program = require('commander')
const fs = require('fs')
const path = require('path')

const CMDS = './cmds'

console.log(process.argv)

console.log('Read commands in directory')
fs.readdir(CMDS, {}, (err, files) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  files.forEach((file) => {
    console.log('Require cmd-file', file)
    require('./' + path.join(CMDS, file))(program) // eslint-disable-line global-require
    console.log('configured: ' + file)
  })

  console.log('Parse args')
  program.parse(process.argv)

  console.log('Finished')
})

console.log('Read directory')
