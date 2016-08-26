var express = require('express');
var router = express.Router();
import database, { Book } from '../../database'

router.get('/', (req, res, next) => {
  const user = req.user
  res.render( 'index', { book })
})

router.get('/:id', function(req, res, next) {
  const { id } = req.params

  Book.one( id )
    .then( book => res.render( 'book_details', { book }))
    .catch( error => res.send({ error, message: error.message }))
})

module.exports = router;