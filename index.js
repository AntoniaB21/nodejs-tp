const express = require('express');
const showsRouter = require('./routes/shows');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const episodeRouter = require('./routes/episodes');
const usersRouter = require('./routes/users');

const axios = require("axios").create({baseUrl: "https://api.tvmaze.com/"});

app.use(bodyParser.json())
app.use('/shows',showsRouter);
app.use('/episodes',episodeRouter);
app.use('/users',usersRouter);

app.get('/', (req, res) => {
    res.json({'message':'API is running fine!'})
})

app.get("/axios-shows", (req, res) => {
	axios({
		url: "show",
		method: "get",
	})
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
});

app.get("/axios-people", (req, res) => {
	axios({
		url: "people",
		method: "get",
	})
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})