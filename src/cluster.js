const cluster = require('cluster');
const os = require('os');
const app = require('./index');

const port = 3000;
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Forking a new worker...`);
    cluster.fork();
  });
} else {
  app.listen(port, () => {
    console.log(`Worker ${process.pid} started and listening on port ${port}`);
  });
}
