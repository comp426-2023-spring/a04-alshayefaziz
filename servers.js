#!/usr/bin/env node

import {getRandom, checkValid, checkWin, play, rps, rpsls} from "../lib/rpsls.js"
import express from 'express'
const app = express();
import minimist from 'minimist'
var arg = minimist(process.argv.slice(2));

const PORT = arg.port || 5000;