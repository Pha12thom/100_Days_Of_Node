const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());
const models = require('../models/usermodel');
const db = require('../mongoosedb/dbconnect');