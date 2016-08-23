import SimpleUpdate from '../models/simple_update'

describe ( 'SimpleUpdate', () => {
  describe( '#constructor', () => {
    it( 'throws when no parameters are provided', () => {
      expect( () => new SimpleUpdate() ).toThrow( 'Table parameter is required' )
    })

    it( 'throws when a non string parameter is provided', () => {
      expect( () => new SimpleUpdate( 1 ) ).toThrow( 'Table parameter must be string' )
    })

    it( 'throws when no fields are provided' )
    it( 'throws when no where clause is provided' )
  })

  describe( '#toString', () => {
    // Individual field, multiple fields
    it( 'includes all fields in UPDATE query' ) 

    it( 'includes where clause in UPDATE query' )
  })
})

"UPDATE books SET title='new title', other='something' WHERE id=1"
