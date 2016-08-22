import express from 'express'
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('layout', {} )
  //include dynamic rendering for admin/user pages
})

module.exports = router;
