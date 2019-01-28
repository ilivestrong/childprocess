

process.on('message', msg => {
    console.log(`Message from Parent: ${msg}`)
})

process.send('Hi Parent process, thanks for giving me life.')

