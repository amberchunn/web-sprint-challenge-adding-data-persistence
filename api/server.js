// build your server here and require it from index.js
const express = require('express');
const projectRoutes = require('./project/router');
const taskRoutes = require('./task/router');
const resourceRoutes = require('./resource/router');

const server = express();

server.use(express.json());

server.use('/api/projects', projectRoutes);
server.use('/api/tasks', taskRoutes);
server.use('/api/resources', resourceRoutes);

server.get("/", (req, res) => {
	res.status(200).json({
		message: `Welcome!`
	})
})

module.exports = server;
