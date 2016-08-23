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
      const query = new SimpleJoin( 'genres',  {
          fields: ['genres', 'book_genres.book_id'],
          join: ['book_genres'],
          where: [{ field_id: 'book_genres.book_id' }],
          on: [{join_id: 'book_genres.genre_id', eqlTo: 'genres.id'}],
          in: 1
        })

      expect( query.toString() ).toEqual(
        `SELECT genres.*, book_genres.book_id FROM genres JOIN book_genres ON genres.id = book_genres.genre_id WHERE book_genres.book_id IN 1`
      )
    })

    it( 'returns a SELECT field.* SQL statement JOIN', () => {
      const query = new SimpleJoin( 'genres',  {
          fields: ['genres'],
          join: ['book_genres'],
          where: [{ field_id: 'book_genres.book_id' }],
          on: [{join_id: 'book_genres.genre_id', eqlTo: 'genres.id'}],
          in: 1
        })

      expect( query.toString() ).toEqual(
        `SELECT genres.* FROM genres JOIN book_genres ON genres.id = book_genres.genre_id WHERE book_genres.book_id IN 1`
      )
    })

    it( 'returns a SELECT field.* SQL statement JOIN', () => {
      const query = new SimpleJoin( 'books',  {
          fields: ['books'],
          join: ['book_authors'],
          where: [{ field_id: 'book_authors.author_id' }],
          on: [{join_id: 'book_authors.book_id', eqlTo: 'book.id'}],
          in: 1
        })

      expect( query.toString() ).toEqual(
        `SELECT books.* FROM books JOIN book_authors ON book.id = book_authors.book_id WHERE book_authors.author_id IN 1`
      )
    })
  })
})

/*
SELECT genres.*, book_genres.book_id FROM book_genres ON genres.id = book_genres.genre_id WHERE book_genres.book_id IN (stuff)

SELECT authors.*, book_authors.book_id FROM book_authors ON authors.id = book_authors.author_id WHERE book_authors.book_id IN (stuff)
SELECT book.*, book_favorites.user_id FROM book_favorites ON book.id = book_favorites.user_id WHERE book_favorites.book_id IN (stuff)
*/
