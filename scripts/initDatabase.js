/**
 * scripts\initDatabase.js
 */

/* Import node_modules */
const csvToJson = require("csvtojson");
const MongoClient = require("mongodb").MongoClient;

/* Import config file */
const config = require("../config");

/* Database initializaition */
function initDatabase() {
	csvToJson({ delimiter: [";"] })
		.fromFile(`./public/${config.importCsv.fileName}.csv`)
		.then((jsonObj) => {
			MongoClient.connect(`mongodb://${config.db.host}:${config.db.port}/`, {
				useNewUrlParser: true,
				useUnifiedTopology: true
			}, (err, database) => {
				if (err) throw err;
				database
					.db(config.db.base)
					.collection(config.db.collection)
					.insertMany(jsonObj, (err, res) => {
						if (err) throw err;
						console.log("Import done, " + res.insertedCount.toLocaleString() + " rows inserted on database");
						database.close();
					});
			});
		})
};

initDatabase();