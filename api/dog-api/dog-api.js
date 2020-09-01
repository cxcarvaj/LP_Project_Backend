var express = require('express');
var router = express.Router();
var request = require("request");

router.get('/:dog_breed', function(req, res) {
    var options = { method: 'GET',
    url: 'https://dog.ceo/api/breed/'+`${req.params.dog_breed}`+'/images',
    };
  
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.send(body);
      });
  });


  module.exports=router;