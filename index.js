const express = require('express');
const homeRouter = require('./routes/home');
const app = express();
const port = 3000;

app.use('/home',homeRouter);

app.get('/', (req, res) => {
    res.json({'message':'API is running fine!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})