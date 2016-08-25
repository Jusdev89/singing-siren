import SimpleUpdate from '../models/simple_update'

describe ( 'SimpleUpdate', () => {
  describe( '#constructor', () => {
    it( 'throws when no table parameter is provided', () => {
      expect( () => new SimpleUpdate() ).toThrow( 'Table parameter is required' )
    })

    it( 'throws when a non string table parameter is provided', () => {
      expect( () => new SimpleUpdate( 1 ) ).toThrow( 'Table parameter must be string' )
    })

    it( 'throws when no id is provided', () => {
      expect( () => new SimpleUpdate( 'demonhunter' ) ).toThrow( 'ID is required' )
    })

    it( 'throws when no fields are provided', () => {
      expect( () => new SimpleUpdate( 'books', 1, {} ) ).toThrow( 'At least one field is required' )
    })
  })

  describe( '#toString', () => {
    it( 'returns the correct UPDATE SQL statement', () => {
      const query = new SimpleUpdate( 'books', 1, {title: 'new title'} )

      expect( query.toString() ).toEqual( "UPDATE books SET title='new title' WHERE id=1" )
    })

    it( 'includes all values in the UPDATE SQL statement', () => {
      const query = new SimpleUpdate( 'books', 1, { title: 'new title', other: 'something' } )

      expect( query.toString() ).toEqual( "UPDATE books SET title='new title', other='something' WHERE id=1" )
    })
  })
})

"UPDATE books SET title='new title', other='something' WHERE id=1"
