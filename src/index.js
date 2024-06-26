const express = require('express');
const { cpuTask } = require('./cputasks');
const { ioTask } = require('./iotasks');

const app = express();

let requestNumber = 0;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/cpu', (req, res) => {
  const currentRequest = requestNumber++;
  console.log(`Starting CPU-intensive request ${currentRequest}`);
  const result = cpuTask(currentRequest);
  res.send(`CPU Task Completed: ${result}`);
});

app.get('/io', async (req, res) => {
  const currentRequest = requestNumber++;
  console.log(`Starting I/O-intensive request ${currentRequest}`);
  const result = await ioTask(currentRequest);
  res.send(`I/O Task Completed: ${result}`);
});

module.exports = app;
