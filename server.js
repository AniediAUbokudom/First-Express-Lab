const express = require('express')
const app = express()
const port = 3000

app.get('/greeting', (req, res) => {
    res.send('Hello, stranger')
  });

  app.get('/greeting/:name', (req, res) => {
    let expression1= "How are you, "
    let expression2= "?"
    res.send(expression1 + req.params.name + expression2);
})






app. listen(port, () => {
  console.log(`Listening port on ${port}`)
})
