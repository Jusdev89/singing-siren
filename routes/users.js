var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  console.log('req.user', req.user)
  const user = req.user
  res.render( 'profile_page', { user })
})


// router.get('/:id', function(req, res, next) {
//   res.render();
// });

module.exports = router;
