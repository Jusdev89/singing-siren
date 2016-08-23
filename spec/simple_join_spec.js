import SimpleJoin from '../models/simple_join'

describe ( 'SimpleJoin', () => {
  describe( '#constructor', () => {
    it( 'throws when no parameters are provided', () => {
      expect( () => new SimpleJoin() ).toThrow( 'Table parameter is required' )
    })

    it( 'throws when a non string parameter is provided', () => {
      expect( () => new SimpleJoin( 1 ) ).toThrow( 'Table parameter must be string' )
    })
  })


  describe( '#toString', () => {
    it( 'returns a SELECT field.* SQL statement JOIN', () => {
      const query = new SimpleJoin( 'book_genres',  {
          fields: ['genres', 'book_genres.book_id'], 
          where: [{ id: 'book_genres.book_id' }],
          on: [{id: 'book_genres.genre_id', eqlTo: 'genres.id'}],
          in: {id: 1}
        })

      expect( query.toString() ).toEqual( 
        `
        SELECT 
          genres.*, book_genres.book_id 
        FROM 
          book_genres 
        ON 
          genres.id = book_genres.genre_id 
        WHERE 
          book_genres.book_id 
        IN 
          1
        ` )
    })
  })
})

