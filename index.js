const express = require('express');
const showsRouter = require('./routes/shows');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/shows',showsRouter);


app.get('/', (req, res) => {
    res.json({'message':'API is running fine!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})