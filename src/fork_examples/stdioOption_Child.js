console.log('this is child module!')
process.on('message', msg => console.log(msg))

process.send('Hi parent!')