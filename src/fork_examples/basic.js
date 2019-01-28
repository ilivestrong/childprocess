
const init= () => {
    const cp = require('child_process')
    const processObj = cp.fork(`${__dirname}/testModule.js`)

    processObj.on('message', msg => {
        console.log(`Message from forked child process: ${msg}`)
    })

    processObj.send('Hi kiddo, welcome to the world!')
}

module.exports = init

