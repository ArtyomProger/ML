require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');
const PORT = 8080;

const SchemeTemplate = require("./makeSchema");

const pool = new pg.Pool({
  port: process.env.PGHPORT,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  user: process.env.PGUSER
});

const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.post("/connections/:schema", (req, res) => {
	let arr1 = [1,2,4,5],
		arr2 = [9,7,8,4,6],
		arr3 = [5,6,7,8,6];
	let values = [req.params.schema, req.params.schema, SchemeTemplate(arr1, arr2, arr3)];

	// The first need to select * from table with transactions 
	// then put it to var and send to SchemeTemplate function
	
	pool.connect((err, db, done) => {
		if (err) {
			return res.sendStatus(400).send({ message: err });
		} else {
		db.query(`insert into schema (schemaid, customerid, schema) values($1, $2, $3)`,
			[...values], (err, table) => {
				done();
				if (err) {
					return console.log(err);
				} else {
					res.send('Data inserted');
					db.end();
				}
			});
		}
	});
});

app.get("/connections/:schema", (req, res) => {
	pool.connect((err, db, done) => {
		if (err) {
			return res.sendStatus(400).send({ message: err });
		} else {
			db.query(
				`select * from schema where schemaid = ${req.params.schema}`,
				(err, table) => {
					if (err) {
						return res.sendStatus(400).send(err);
					} else {
						res.json(table.rows);
					}
				}
			);
			done();
		}
	});
});

app.use("/test_db", (req, res) => {
	pool.connect((err, db, done) => {
		if (err) {
			return res.sendStatus(400).send({ message: err });
		} else {
			db.query("select * from transactions", (err, table) => {
				if (err) {
				return res.sendStatus(400).send(err);
				} else {
				res.json(table.rows);
				}
			});
			done();
		}
	});
});

app.listen(PORT, () => console.log('Listening on port ' + PORT));