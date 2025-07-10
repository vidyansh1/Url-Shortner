// const router = require ('express').Router();
const express = require('express');
const router = express.Router();
const{
    createShortUrl,
} = require('../controller/url');

router.post('/', createShortUrl);
module.exports = router;
