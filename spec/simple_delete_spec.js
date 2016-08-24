import SimpleDelete from '../models/simple_delete'

describe ( 'SimpleDelete', () => {
  describe( '#constructor', () => {
    it( 'throws when no parameters are provided', () => {
      expect( () => new SimpleDelete() ).toThrow( 'Table parameter is required' )
    })

    it( 'throws when a non string parameter is provided', () => {
      expect( () => new SimpleDelete( 1 ) ).toThrow( 'Table parameter must be string' )
    })

    it( 'throws when no fields are provided', () => {
      expect( () => new SimpleDelete('books', {}) ).toThrow('Fields are required')
    })

    it( 'throws when no where clause is provided', () => {
      expect(() => new SimpleDelete( 'books', {fields:{selector:'foo'}})).toThrow('A Where clause (your item ID) is required')
    })
  })

// delete title for id 1
"DELETE FROM books USING title WHERE id=1"

// delete all titles in books
"DELETE FROM books USING title"

//clear table
"DELETE FROM books"