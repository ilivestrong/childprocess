
const init = () => {

    const Path = require('path')
    const cp = require('child_process')

    /**
     * Forked CHILD
     * It has 'ipc' stdio option built-in
     */
    // const forkedChildProcessObj = cp.fork(Path.resolve('src', 'fork_examples', 'stdioOption_Child.js'))
    // forkedChildProcessObj.send('Message to forked child!')

    /**
     * Spanwed CHILD
     * By default 'pipe' is the built-in option.
     * 
     * If child is a Node.Js process and need IPC communication, must provide atleast one 'ipc' fd on child. 
     * Setting this fd enables subprocess.send() and disconnect() methods on child and 'disconnect' & 'message' events.
     * 
     * In this below example, 1(can use 'inherit' also)  is set as fd for child process, which means parent's stdout. So whatever child writes to stdout, 
     * is dipslayed on parent's console/output without needing to consume 'data' event on child. So even if 'data' event listener is attached, it isn't executed.
     * 
     */
    const spawnedChildProcessObj = cp.spawn("node", [`${__dirname}/stdioOption_Child.js`], {stdio: ['pipe', 1, 'pipe', 'ipc']})
    spawnedChildProcessObj.stderr.on('data', err => console.log(err))
    if (spawnedChildProcessObj.stdout) spawnedChildProcessObj.stdout.on('data', data => console.log(`PIPED From CHILD: ${data.toString()}`))
   
    spawnedChildProcessObj.send('Message to spawned child')
    spawnedChildProcessObj.on('message', msg => console.log(`IPC From CHILD: ${msg}`))


 /**
     * Spanwed CHILD
     * By default 'pipe' is the built-in option.
     * 
     * If child is a Node.Js process and need IPC communication, must provide atleast one 'ipc' fd on child. 
     * Setting this fd enables subprocess.send() and disconnect() methods on child and 'disconnect' & 'message' events.
     * 
     * In this below example, 'pipe' is set as fd for child process(default). 
     * In this case, parent needs to consume 'data' event on child process object.
     */
    // const spawnedChildProcessObj = cp.spawn("node", [`${__dirname}/stdioOption_Child.js`], {stdio: ['pipe', 'pipe', 'pipe', 'ipc']})
    // spawnedChildProcessObj.stderr.on('data', err => console.log(err))
    // //if (spawnedChildProcessObj.stdout) spawnedChildProcessObj.stdout.on('data', data => console.log(`PIPED From CHILD: ${data.toString()}`))
    // if (spawnedChildProcessObj.stdio[1]) spawnedChildProcessObj.stdio[1].on('data', data => console.log(`PIPED From CHILD: ${data.toString()}`))

    // spawnedChildProcessObj.send('Message to spawned child')
    // spawnedChildProcessObj.on('message', msg => console.log(`IPC From CHILD: ${msg}`))



     /**
     * Spanwed CHILD
     * By default 'pipe' is the built-in option.
     * 
     * If child is a Node.Js process and need IPC communication, must provide atleast one 'ipc' fd on child. 
     * Setting this fd enables subprocess.send() and disconnect() methods on child and 'disconnect' & 'message' events.
     * 
     * In this below example, 'ignore' is set as fd for child process. 
     * In this case, everything from child stdout will be ignored.
     */
    // const spawnedChildProcessObj = cp.spawn("node", [`${__dirname}/stdioOption_Child.js`], {stdio: ['pipe', 'ignore', 'pipe', 'ipc']})
    // spawnedChildProcessObj.stderr.on('data', err => console.log(err))
    // if (spawnedChildProcessObj.stdout) spawnedChildProcessObj.stdout.on('data', data => console.log(`PIPED From CHILD: ${data.toString()}`))
   
   
    // if(spawnedChildProcessObj.send) spawnedChildProcessObj.send('Message to spawned child')
    // spawnedChildProcessObj.on('message', msg => console.log(`IPC From CHILD: ${msg}`))


  

}

module.exports = init