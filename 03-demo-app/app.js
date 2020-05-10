const express = require('express');
const router = express.Router();

router.get('/ping', function (req, res) {
    res.send('pong');
});

router.get('/healthcheck', function (req, res, next) {
    res.send('OK');
})

module.exports = router;
