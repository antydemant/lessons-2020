const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = require('./app');

const server = express();
const port = 3000;

server.set('view engine', 'ejs');
server.set('views', './views')

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

server.use(express.static('public'));

server.use('/', app);

server.get('/', async (req, res) => {
    let searchHashtag = 'одуванчиктріп';
    let items = null;

    if(!!req.query.search) {
        searchHashtag = req.query.search.substr(1);
    }

    try {
        items = await axios.get(encodeURI('https://www.instagram.com/explore/tags/' + searchHashtag + '/?__a=1'));
    } catch(e) {
        console.log(e);
    } 

    res.render('index', {
        items: items ? items.data.graphql.hashtag.edge_hashtag_to_media.edges : null
    });
});

server.listen(port, () => { 
    console.log(`Example app listening at http://localhost:${port}`);
});