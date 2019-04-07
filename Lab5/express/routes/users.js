const express = require('express');
const router = express.Router();
const http = require('http');
const axios = require('axios');
const geturl = 'https://randomuser.me/api/?results=10';

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  async function callMe() {
    try {
      const response = await axios.get(geturl);
      res.set({
        'Cache-Control': 'private, max-age = 86400',
        "Link": "<" + geturl + ">; rel='first'",
      });
      res.send(response.data).end();
    } catch (err) {
      console.log('Error occured', error);
      res.writeHead(500).send('Error occured').end();
    }}

  // async function callMe() {
  //   try {
  //     const result = await axios.get(geturl);
  //     res.send(result.data);
  //     res.end();
      
  //   } catch (error) {
  //     console.log('Error occured', error);
  //     res.writeHead(500).send('Error occured').end();
  //   }
  // };

  callMe();
  //const ret = callMe();
  //console.log(ret);
  
});

module.exports = router;
