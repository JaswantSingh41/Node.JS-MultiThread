const fs = require('fs').promises;

async function ioTask(requestNumber) {
  const startTime = new Date().getTime();
  const data = await fs.readFile('sample.txt', 'utf8'); 
  const endTime = new Date().getTime();
  console.log(`Request ${requestNumber} I/O task took ${endTime - startTime} ms`);
  return data.length;
}

module.exports = { ioTask };
