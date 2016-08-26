import express from 'express'
import database, { Book, Search } from '../database'
const router = express.Router()

/* GET home page. */
router.get('/', (request, response, next) => {

  const { query } = request
 
  const page = query.page || 1
  const size = query.size || 10

  if( query.search_query === undefined ) {
    Book.all( page, size )
      .then( books => response.render( 'index', { books, page, size } ))
      .catch( error => response.send({ error, message: error.message }))
  } else {
    Search.forBooks({ page, size, search_query: query.search_query })
      .then( books => response.render( 'index', { books, page, size } ))
      .catch( error => response.send({ error, message: error.message }))
  }
})

router.get('/test', (req, res) => {
  Book.getAuthors(2).then( books => res.json(books)).catch( err => res.json(err))
})

// router.get('/:id', (req, res) => {
//   Book.one(req.params.id).then( book => res.render('book_details', {book})).catch( err => res.json(err))
// })

module.exports = router;
