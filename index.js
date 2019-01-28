

// const spawnImplementation = require('./src/spawn_examples/implementSpawn')
// spawnImplementation()


// const basicExecImplementation = require('./src/exec_examples/basic')
// basicExecImplementation()

// const basicExecFileImplementation = require('./src/execFile_examples/basic')
// basicExecFileImplementation()

const basicForkImplementation = require('./src/fork_examples/basic')
basicForkImplementation()

console.log(`Process execPath: ${process.execPath}`)
