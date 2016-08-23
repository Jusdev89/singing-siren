import SimpleUpdate from '../models/simple_insert'

describe ( 'SimpleJoin', () => {
  describe( '#constructor', () => {
    it( 'throws when no parameters are provided', () => {
      expect( () => new SimpleUpdate() ).toThrow( 'Table parameter is required' )
    })

    it( 'throws when a non string parameter is provided', () => {
      expect( () => new SimpleUpdate( 1 ) ).toThrow( 'Table parameter must be string' )
    })
  })

  describe( '#toString', () => {
    it( 'returns a query that updates your table', () => {
      const query = new SimpleUpdate( 'authors', { 
        selector: [ 'img_url', 'name', 'bio', 'awesome'],
        values: ['www.somewhere.com', 'Joe Blow', 'Some Dude', 'Rachel']
      } )

      expect( query.toString() ).toEqual( 'INSERT INTO authors(img_url, name, bio, awesome) VALUES (www.somewhere.com, Joe Blow, Some Dude, Rachel)' )
    })
  })
})