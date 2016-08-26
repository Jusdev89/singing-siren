var express = require('express');
var router = express.Router();
import database, { Book } from '../../database'

router.get('/', (req, res, next) => {
  const user = req.user
  res.render( 'index', { book })
})

router.get('/delete/:id', (req, res, next) =>{
  const { id } = req.params

  Book.delete( id )
    .then( result => res.redirect( '/' ))
    .catch( error => res.send({ error, message: error.message }))
})


router.get('/:id', function(req, res, next) {
  const { id } = req.params
  const user = req.user

  Book.one( id )
    .then( book => res.render( 'book_details', { book, user }))
    .catch( error => res.send({ error, message: error.message }))
})

router.post( '/', (request, response) => {
  Book.insert( request.body )
    .then( id => response.redirect( `/books/${id}` ))
    .catch( error => response.send({ error, message: error.message }))
})


module.exports = router;