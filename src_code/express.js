const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use(function (req, res, next) {
    console.log('middleware')
    if (req.originalUrl === '/ciao') {
        return res.send('fermata dal middleware')
    } else {
       next() 
    }
    
})

app.get('/', (req, res) => {
  res.send('benvenuti al dev hub')
})

app.get('/ciao', (req, res) => {
  res.send('ciao a tutti')
})

app.post('/testpost/:param1', (req, res) => {
    console.log('body', req.body)
    console.log('query', req.query)
    console.log('params', req.params)
    console.log('headers', req.headers)
    // console.log('res',res)
  res.send(' ciao in post')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})