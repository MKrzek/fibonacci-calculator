const keys  = require('./keys')
const {Pool} = require('pg')


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app =  express();
app.use(cors());
app.use(bodyParser.json());

const pgClient = new Pool({
    user:keys.pgUser,
    host:keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});

pgClient.on('error', () => console.log('Lost PG connection'));

pgClient
.query('CREATE TABLE IF NOT EXIST values (number INT)')
.catch(err=>console.log(err))




