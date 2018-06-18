module.exports = (program) => {
  program
    .command('rm <dir>')
    .option('-r, --recursive', 'Remove recursively')
    .action((dir, cmd) => {
      console.log('Action: remove ' + dir + (cmd.recursive ? ' recursively' : ''))
    })
}
