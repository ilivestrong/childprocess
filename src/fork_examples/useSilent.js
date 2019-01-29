/**
 * By default, fork() creates a child process, where the child process inherits 'stdin', 'stdout' and 'stderror' from parent.
 * It means whatever child process writes on its 'stdout', it is actually writing on parent's 'stdout'.
 * Hence console displays the written data. And there is no need to intercept or listen on 'data' event listener of 'stdout' property of child process instance.
 * 
 * If fork() is used with 'silent:true', then child process's 'stdin', 'stdout' and 'stderror' are piped to the parent, instead of being inherited from parent.
 * This means child doesn't have access to paren't stdout, stdin or stderr streams. So whatever child writes, it is on its own stdout which 
 * is then available on 'stdin', 'stdout' and 'stderror' streams on child process object and can be consumed via 'data' event listener. 
 */

const init = () => {

    console.log('I will be printed anyhow.')

    const cp = require('child_process')
    const processObj = cp.fork(`${__dirname}/silentChild.js`, null, {
        silent: true
    })

    if(processObj.stdout) {
        console.log('Silent = True')
        processObj.stdout.on('data', data => console.log(`${data}`))
    }
    else 
    console.log('Silent = False')
}

module.exports = init
