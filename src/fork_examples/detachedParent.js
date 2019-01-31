
/**
 * To ignore termination of child process, irrespective of parent process termination, we need to :
 * 1. Set 'detached: true' in the 'options' object passed to spawn/fork methods.
 * 2. Ignore parent's stdio file descriptors. If using any 'stdio' file descriptors connected to parent, parent will keep waiting for child process termination,
 *    before termination itself.
 * 3. Call unref() on child process object.
 */


const init = () => {
    console.log(`Parent process statistics:  argv[0]: ${process.argv[0]}, argv0: ${process.argv0}`)

    const cp = require('child_process')
    const detachedChildProcessObj =  cp.spawn(  process.argv[0], 
                                                [`${__dirname}/detachedChild.js`],
                                                {detached: true, stdio: ['ignore']})
    detachedChildProcessObj.unref()
    if(detachedChildProcessObj.stdout) detachedChildProcessObj.stdout.on('data', data => console.log(data.toString()))
    
}
module.exports = init