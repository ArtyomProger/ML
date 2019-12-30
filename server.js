require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');
const PORT = 8080;

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

// app.use('/api/new-country', function(req, res) {
// 	let country_name = req.body.country_name;
// 	let countinent_name = req.body.countinent_name;
// 	let id = Math.random().toFixed(3);
// 	let values = [country_name, countinent_name, id];
// 	pool.connect((err, db, done) => {
// 		if (err) {
// 			return console.log(err);
// 		} else {
// 			db.query('INSERT INTO countries (country_name, countinent_name, id) VALUES($1, $2, $3)', 
// 				[...values], (err, table) => {
// 					done();
// 					if (err) {
// 						return console.log(err);
// 					} else {
// 						console.log('DATA INSERTED');
// 						db.end();
// 					}
// 			});
// 		}
// 	});
// });

app.use('/test_db', (req,res) =>  {
	pool.connect((err, db, done) => {
		if (err) {
			return res.sendStatus(400).send({ message: err});
		} else {
			db.query("SELECT * from transactions", (err, table) => {
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