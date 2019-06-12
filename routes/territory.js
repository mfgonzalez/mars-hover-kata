var express = require('express');
var router = express.Router();
const Store = require('data-store');
const store = new Store({ path: 'store.json' });
const util = require('util');
const URL = 'http://localhost:3000';

router.put('/', function(req, res, next) {
    let territory = req.body;
    territory.href = `${URL}/territory/${territory.nome}`;
    store.set(territory.name, territory);
    
    res.setHeader('Content-Type', 'application/json');
    res.status(201);
    res.send(JSON.stringify(territory));
});

router.get('/:name', function(req, res, next) {
    let name = req.params['name'];
    let territory = store.get(nome);
    res.setHeader('Content-Type', 'application/json');
    if (territory) {
        res.status(200);
        res.send(JSON.stringify(territory));
    } else {
        res.status(404);
        res.send('');
    }
});

module.exports = router;