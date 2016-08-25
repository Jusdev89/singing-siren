import passport from 'passport'
import { Strategy } from 'passport-local'

import { User } from '../database'

const verify = (email, password, callback) => {
  User.find( email, password )
    .then( user => {
      callback( null, user ? user : false )
    })
    .catch( error => callback( error ) )
}

const usernameField = 'email'
const passwordField = 'password'

passport.use( new Strategy({ usernameField, passwordField }, verify ) )

passport.serializeUser( (user, callback) => {
  callback( null, user.id )
})

passport.deserializeUser( (id, callback) => {
  User.one( id ).then( user => { 
    const { id, email, name, bio, img_url } = user

    callback( null, { id, email, name, bio, img_url } ) 
  })
  .catch( error => callback( error ) )
})

export default passport