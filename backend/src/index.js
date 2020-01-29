const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const http = require('http');

const routes = require('./routes');
const { setupWebScoket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebScoket(server);

mongoose.connect('mongodb+srv://johnny:m45n78s96@cluster0-zqoch.mongodb.net/week10?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);