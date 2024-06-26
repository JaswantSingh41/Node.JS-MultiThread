function CpuTask(requestNumber) {
    const startTime = new Date().getTime();
    let sum = 0;
    for (let i = 0; i < 100000; i++) { // Simulate a CPU-intensive task
      sum += i;
    }
    const endTime = new Date().getTime();
    console.log(`Request ${requestNumber} CPU task took ${endTime - startTime} ms`);
    return sum;
  }
  
  module.exports = { CpuTask };
  