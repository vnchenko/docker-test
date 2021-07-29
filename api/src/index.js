const express = require('express');
const { connectDb } = require('./helpers/db');
const axios = require('axios');
const mongoose = require('mongoose');
const {
  port,
  authApiUrl
} = require('./config')
const app = express();

// const postSchema = new mongoose.Schema({
//   name: String
// });

// const Post = mongoose.model('Post', postSchema);

const startServer = () => {
  app.listen(port, () => {
    console.log('started api service on port:', port);

    // Post.find(function (err, posts) {
    //   if (err) return console.error(err);
    //   console.log('posts', posts);
    // })

    // const silence = new Post({ name: 'Silence' });
    // silence.save((err, savedSilence) => {
    //   if (err) return console.error(err);
    //   console.log('savedSilence!!!!!', savedSilence);
    // })
    // console.log(silence);
  })
}

app.get('/test', (req, res) => {
  res.send('/test');
})

app.get('/api/testapidata', (req, res) => {
  res.json({
    testwithapi: true,
  })
})

app.get('/testwithcurrentuser', (req, res) => {
  axios.get(authApiUrl + '/currentUser').then((resp) => {
    console.log('resp', resp);
    res.json({
      testwithcurrentuser: true,
      currentUserFormAuth: resp.data,
    })
  })
})

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer);