const init = () => {

    const cp = require("child_process")

    /** 
     * 1st way to get output from child process using exec() is to provide a callback with error, stdout, sterror arguments.
     * Output from child process is provided to parent process as a string(Utf-8 encodedd-default) as stdout argument.
     * ------------------------------------------------------------------------------------------------------------------------------------
     */
    cp.exec("ls -a", {
        timeout: 0
    }, (err, stdout, strerr) => {
        if (err) {
            console.log(`An error occurred in child process:\nError code: ${err.code}\nError Signal: ${err.signal}\nDescription:${err}`)
        } else {
            console.log(`Output from child process:\n${stdout}`)
        }
    })


    /** 
     * 2nd way to get output from child process using exec() is to bind event listener on stdout/sterror streams on 'data'/ 'error' events.
     * ------------------------------------------------------------------------------------------------------------------------------------
     */
    // const processObj = cp.exec("ls -a", { timeout: 0 })
    // processObj.stdout.on('data', data => {
    //     console.log(typeof data)
    //     console.log(`Data from child process:\n${data}`)
    // })

}
module.exports = init