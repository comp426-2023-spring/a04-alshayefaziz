#!/usr/bin/env node

import {getRandom, checkValid, checkWin, play, rps, rpsls} from "../lib/rpsls.js"
import express from 'express'
const app = express();
import minimist from 'minimist'
var arg = minimist(process.argv.slice(2));

const PORT = arg.port || 5000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// check for 200 ok
app.get('/app', (req, res) => {
	res.status(200).send("200 OK");
});

// rock paper scissors
app.get('/app/rps', (req, res) => {
	res.status(200).send(rps());
});
app.get('/app/rps/play', (req, res) => {
	res.status(200).send(rps(req.query.shot));
});
app.post('/app/rps/play', (req, res) => {
	res.status(200).send(rps(req.body.shot));
});
app.get('/app/rps/play/:arg', (req, res) => {
	res.status(200).send(rps(req.params.arg));
});
// rock paper scissors lizard spock

