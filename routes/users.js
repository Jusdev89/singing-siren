import database, { Author, Genre } from '../database'
import express from 'express'
const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  const user = req.user

  Promise.all([
    Author.all(),
    Genre.allGenres()
  ])
  .then( results => {
    const authors = results[ 0 ]
    const genres = results[ 1 ]

    res.render( 'profile_page', { user, authors, genres })
  })
})

module.exports = router;
