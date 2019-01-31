
setInterval(()=> 
console.log(`Child process statistics: PID: ${process.pid}  argv[0]: ${process.argv[0]}, argv0: ${process.argv0}`),
1000)