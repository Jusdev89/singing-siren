import database, { Author } from '../database'
import express from 'express'
const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  const user = req.user

  Author.all().then(authors => {
    console.log('Authors', authors)

    res.render( 'profile_page', { user, authors })
  })
})

module.exports = router;
