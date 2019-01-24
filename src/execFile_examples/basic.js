const init = () => {
    const cp = require('child_process')
    console.log('*** execFile() implementation ***\n')
     /** 
     * 1st way to get output from child process using execFile() is to provide a callback with error, stdout, sterror arguments.
     * Output from child process is provided to parent process as a string(Utf-8 encodedd-default) as stdout argument.
     * ------------------------------------------------------------------------------------------------------------------------------------
     */
    cp.execFile('git', ["branch"], (error, stdout, stderror) => {
        if (error) {
            console.log(`Child process returned an error.\nError code: ${error.code}\nMessage: ${error.message}`)
        } else {
            console.log(`Output from Child process:\n${stdout}`)
        }
    })

    /** 
     * 2nd way to get output from child process using execFile() is to bind event listener on stdout/sterror streams on 'data'/ 'error' events.
     * ------------------------------------------------------------------------------------------------------------------------------------
     */
    // const processObj = cp.execFile('git', ["branch"])
    // processObj.stdout.on('data', data => {
    //     console.log(`Data from Child process:\n${data}`)
    // })
}

module.exports = init