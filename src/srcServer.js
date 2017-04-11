﻿import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res)
{
    res.sendfile(path.join(__dirname, "index.html"));
});

console.log("Server running");

app.listen(3000, function(err){
    if(err) {
        console.log(err);
    }
});
