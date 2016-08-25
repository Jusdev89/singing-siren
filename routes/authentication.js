import express from 'express'
const router = express.Router()

import passport from '../config/passport'

const REDIRECTS = { successRedirect: '/', failureRedirect: '/auth/login' }

router.get( '/login', (request, response) => {
  response.render( 'login', { message: request.flash().toString() } )
})

router.post( '/login', passport.authenticate( 'local', REDIRECTS), (request, response) => {
  response.redirect( '/' )
})

router.get( '/logout', (request, response) => {
  request.logout()
  response.redirect( '/' )
})

module.exports = router;
