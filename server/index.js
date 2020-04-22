const keys  = require('./keys')
const {Pool} = require('pg')
const redis = require('redis')


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



const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    redis_strategy:() => 1000
});
const redisPublisher = redisClient.duplicate()
