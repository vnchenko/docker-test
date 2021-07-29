const express = require('express');
const { connectDb } = require('./helpers/db');
const axios = require('axios');
const {
  port,
  apiUrl,
} = require('./config')
const app = express();

const startServer = () => {
  app.listen(port, () => {
    console.log('started auth service on port:', port);
  })
}

app.get('/api/currentUser', (req, res) => {
  res.json({
    id:1,
    email: 'test@test.test',
  })
})

app.get('/testwithapidata', (req, res) => {
  console.log('apiUrl')
  axios.get(apiUrl + '/testapidata').then((resp) => {
    res.json({
      testapidata: resp.data.testapidata,
    })
  })
})

app.get('/test', (req, res) => {
  res.send('/test auth');
})

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer);