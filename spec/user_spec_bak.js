import SimpleSelect from '../models/simple_select'

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


