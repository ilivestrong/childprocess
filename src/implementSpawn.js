
init = () => {
    const cpObj = require('child_process')

    //const lsChildProcess =  cpObj.spawn('ls', ['-lh', '/usr'])
    const lsChildProcess =  cpObj.spawn('git', ['branch'])
    
    lsChildProcess.stdout.on('data', data => {
        console.log(data.toString())
    })

    lsChildProcess.stderr.on('data', error => {
        console.log(`Error occurred: ${error}`)
    })
    
    lsChildProcess.on('close', (exitCode) => {
        console.log(`process exited with code: ${exitCode}`)
    })
}


module.exports = init