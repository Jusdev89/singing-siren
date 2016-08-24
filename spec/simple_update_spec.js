import SimpleUpdate from '../models/simple_update'

describe ( 'SimpleUpdate', () => {
  describe( '#constructor', () => {
    it( 'throws when no parameters are provided', () => {
      expect( () => new SimpleUpdate() ).toThrow( 'Table parameter is required' )
    })

    it( 'throws when a non string parameter is provided', () => {
      expect( () => new SimpleUpdate( 1 ) ).toThrow( 'Table parameter must be string' )
    })

    it( 'throws when no fields are provided', () => {
      expect( () => new SimpleUpdate('books', {}) ).toThrow('Fields are required')
    })

    it( 'throws when no where clause is provided', () => {
      expect(() => new SimpleUpdate( 'books', {fields:{selector:'foo'}})).toThrow('A Where clause (your item ID) is required')
    })
  })

  describe( '#toString', () => {
    // Individual field, multiple fields
    it( 'includes all fields in UPDATE query (update whole table)', () => { 
     const query = new SimpleUpdate( 'books', {fields:[{title:'new title'}] })

      expect( query.toString() ).toEqual( 'UPDATE books SET title=new title' )
    })

    it( 'includes where clause in UPDATE query (update one entry)', () => {
     const query = new SimpleUpdate( 'books', { fields: [{title:'new title', other:'something'}], id:1 })

      expect( query.toString() ).toEqual( "UPDATE books SET title=new title, other=something WHERE id=1" )
    })
  })
})

"UPDATE books SET title='new title', other='something' WHERE id=1"
