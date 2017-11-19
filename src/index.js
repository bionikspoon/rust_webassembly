async function setup() {
  const wasm = require('./main.rs')
  const module = await wasm.initialize({ noExitRuntime: true })
  const add = module.cwrap('add', 'number', ['number', 'number'])
  console.log('add(1,2)', add(1, 2))
}

setup()
