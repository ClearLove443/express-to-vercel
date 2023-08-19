const express = require('express');
const app = express();
const path = require('path');

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'public') });
})

const { _call } = require('./llm.js');

app.post('/chat', (req, res) => {
  let data = req.body;
  _call(data.q).then(r => {
    console.log(r.text)
    res.send(r.text)
  })
})

app.post('/v1/chat/completions', (req, res) => {
  let data = req.body;
  _call(data.messages + "").then(r => res.send(r.text))
})

const { PORT } = require('./config.js');

const port = PORT || 3000

app.listen(port || 3000);
console.log(`应用启动成功 端口:${port}`);

module.exports = app;