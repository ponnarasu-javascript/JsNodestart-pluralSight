var express = require('express');
var path = require('path');
var open = require('open');
//bundling the code
import webpack from 'webpack';
import config from '../webpack.config.dev'

var port = 3000;
var app = express();
//creating the compiler for the dev server 
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
    noinfo:true,
    publicpath:config.output.publicpath
}));

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http:localhost:'+port);
    }
});

