var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();

var client = restify.createJsonClient({
    url: 'http://localhost:4000'
})

router.get('/', function(req, res, next) {//users app.js

    client.get('/users', function(err, request, response, obj) { // http://localhost:4000/users req res nomes diferentes de cima
        assert.ifError(err);

        res.json(obj); //desse server(4000) pegou-se o objeto do outro server (3000)
    });

});

router.get('/:id', function(req, res, next) {//com id especifico do usuario

    client.get(`/users/${req.params.id}`, function(err, request, response, obj) {
        assert.ifError(err);

        res.json(obj);
    });

});

router.put('/:id', function(req, res, next) {

    client.put(`/users/${req.params.id}`, req.body, function(err, request, response, obj) {
        assert.ifError(err);

        res.json(obj);

    });

});

router.delete('/:id', function(req, res, next) {

    client.del(`/users/${req.params.id}`, function(err, request, response, obj) {
        assert.ifError(err);

        res.json(obj);

    });

});

router.post('/', function(req, res, next) {

    client.post(`/users`, req.body, function(err, request, response, obj) {
        assert.ifError(err);

        res.json(obj);

    });

});

module.exports = router;
