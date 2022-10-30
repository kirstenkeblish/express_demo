const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello NodeJS!</h1>')
  res.send('<h3>Kirsten Keblish - f51c944</h3>')
  res.send('<p>Example app listening on port 3035</p>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})