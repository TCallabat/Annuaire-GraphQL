/**
 * app.js
 */

/* Import node_modules */
const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");

/* Import config file */
const config = require("./config");

/* Import graphql file */
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

/* Create app */
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: config.app.port }, () => {
	console.log("Server started on port " + config.app.port)
});

/* Database connection */
const database = `mongodb://${config.db.host}:${config.db.port}/${config.db.base}`;
mongoose.connect(database, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
}, (err) => {
	if (err) throw err;
	console.log("Connected to database on " + database)
});
