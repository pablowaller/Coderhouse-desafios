const cluster = require ('cluster')
const numCPUs = require ('os').cpus().length

if (process.argv[5] == 'CLUSTER'){
      if(cluster.isMaster){
      console.log(numCPUs)
      console.log(`PID MASTER ${process.pid}`)
  
      for( let i = 0; i < numCPUs; i++ ){
        cluster.fork()
      }
      cluster.on('exit',worker => {
        console.log(`Worker PID: ${worker.process.pid} died ${new Date().toLocaleString()}`)
        
        cluster.fork()
      })
    }else {
        require('./server')
    }
  }else {
    require('./server')

  }
  