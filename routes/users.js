var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  console.log('req.user', req.user)
  const user = req.user
  res.render( 'profile_page', { user })
})

module.exports = router;
