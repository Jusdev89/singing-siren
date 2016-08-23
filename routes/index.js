import express from 'express'
import database, { Book } from '../database'
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  Book.all().then( books => res.render( 'index', { books } ))
  //include dynamic rendering for admin/user pages
})

router.get('/test', (req, res) => {
  database.getAllBooks()
    .then(function(data){
      console.log('data!', data)
      res.json(data)
    })
    .catch((error) => {
      res.json({error})
    })
})

module.exports = router;
