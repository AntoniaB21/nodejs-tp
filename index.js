const express = require('express');
const showsRouter = require('./routes/shows');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const episodeRouter = require('./routes/episodes');
const usersRouter = require('./routes/users');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const model = require('./models');

app.use(bodyParser.json())
app.use('/shows',showsRouter);

app.use('/episodes',episodeRouter);
app.use('/users',usersRouter);

app.get('/', (req, res) => {
    res.json({'message':'API is running fine!'})
})

app.post('/authentication-token', async (req, res) => {
  // route login
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'Error. Please enter the correct email and password' })
  }
  console.log(process.env.JWTPRIVATEKEY);

  const userFromEmail = await model.User.findOne({
    where: {
      email : req.body.email,
      password: req.body.password,
    }
  });

  if (!userFromEmail) {
    return res.status(400).json({ message: 'Error. You have the wrong login or password' })
  }

  const token = jwt.sign({
      id: userFromEmail.id,
      email: userFromEmail.email
  }, process.env.JWTPRIVATEKEY, { expiresIn: '3 hours' })

  // return res.json({ access_token: 'token' })
  return res.json({ access_token: token })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
