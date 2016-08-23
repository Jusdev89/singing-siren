class SimpleSelect {
  constructor( table, options={} ) {
    if( table === undefined  ) {
      throw 'Table parameter is required'
    } else if( typeof( table ) !== 'string' ) {
      throw( 'Table parameter must be string' )
    }

    this.table = table
    this.filter = options.where || []
    this.fields = options.fields || []
  }

  toString() {
    return `SELECT ${this.sqlFields()} FROM ${this.table}${this.where()}`
  }

  sqlFields() {
    if( this.fields.length === 0 ) {
      return '*'
    } else {
      return this.fields.join( ', ' )
    }
  }

  where() {
    if( this.filter.length === 0 ) {
      return ''
    } else {
      const clause = this.filter.map( object => {
        return Object.keys( object ).map( key => `${key}=${object[key]}`)
      }).reduce( (a, b) => a.concat( b ), [] )

      return ` WHERE ${clause.join( ' AND ' )}`
    }
  }
}

export default SimpleSelect

/*

SELECT genres.*, book_genres.book_id FROM book_genres ON genres.id = book_genres.genre_id WHERE book_genres.book_id IN (stuff)
SELECT authors.*, book_authors.book_id FROM book_authors ON authors.id = book_authors.author_id WHERE book_authors.book_id IN (stuff)
SELECT book.*, book_favorites.user_id FROM book_favorites ON book.id = book_favorites.user_id WHERE book_favorites.book_id IN (stuff)



*/