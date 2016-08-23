import SimpleInsert from '../models/simple_insert'

describe ( 'SimpleJoin', () => {
  describe( '#constructor', () => {
    it( 'throws when no parameters are provided', () => {
      expect( () => new SimpleInsert() ).toThrow( 'Table parameter is required' )
    })

    it( 'throws when a non string parameter is provided', () => {
      expect( () => new SimpleInsert( 1 ) ).toThrow( 'Table parameter must be string' )
    })
  })

  describe( '#toString', () => {
    it( 'returns a INSERT INTO xx for VALUES', () => {
      const query = new SimpleInsert( 'authors', { 
        selector: [ 'img_url', 'name', 'bio', 'awesome'],
        values: ['www.somewhere.com', 'Joe Blow', 'Some Dude', 'Rachel']
      } )

      expect( query.toString() ).toEqual( 'INSERT INTO authors(img_url, name, bio, awesome) VALUES (www.somewhere.com, Joe Blow, Some Dude, Rachel)' )
    })
  })
})