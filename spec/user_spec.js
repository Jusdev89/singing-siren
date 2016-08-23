import Users from '../models/users'

describe ( 'Users', () => {
  it ('gets all users', () => {
    const user = new Users()
    expect ( user.getAllUsers() ).toEqual('SELECT * FROM users')
  })

  it ('get a single users', () => {
    const user = new Users( {id:1} )
    expect ( user.getUser() ).toEqual('SELECT users.* FROM users WHERE id=1')
  })

  describe( '#setPassword', () => {
    it( 'sets the users password', () => {
      const user = new Users()

      user.setBio( 'pass123' )
      expect( user.getBio() ).toEqual( 'pass123' )
    })
  })
})


/*
*****jrob, how the fuck do we make this work w reset password?
edit bio?
general crud user things
how to test bio editing
how to test set string0
*/