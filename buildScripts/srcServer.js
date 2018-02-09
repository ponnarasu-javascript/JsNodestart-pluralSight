'use strict';

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackConfig = require('../webpack.config.dev');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var path = require('path');
var open = require('open');
//bundling the code


var port = 3000;
var app = express();
//creating the compiler for the dev server 
var compiler = (0, _webpack2.default)(_webpackConfig2.default);

app.use(require('webpack-dev-middleware')(compiler, {
    noinfo: true,
    publicpath: _webpackConfig2.default.output.publicpath
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open('http:localhost:' + port);
    }
});
