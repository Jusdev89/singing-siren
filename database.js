const databaseName = 'bookstore'
const connectionString = `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const pgp = require('pg-promise')()
const db = pgp(connectionString)

import SimpleSelect from './models/simple_select'
import SimpleJoin from './models/simple_join'
import SimpleDelete from './models/simple_delete'

const genericFunctions = tableName => {
  return {
    all: () => db.any( (new SimpleSelect( tableName )).toString() ),
    one: id => db.one( (new SimpleSelect( tableName, { where: [{ id }] } )).toString() ),
    delete: id => db.one( ( new SimpleDelete( tableName, id ) ).toString() )
  }
}

const Book = Object.assign(
  {
    getAuthors: id => db.many(new SimpleJoin( 'books',  
        {
          fields: [ 'books' ],
          join: ['book_authors'],
          where: [{ field_id: 'book_authors.author_id' }],
          on: [ 'book_authors.book_id', 'book.id' ]
        }
      ).toString(), [id])
  },
  genericFunctions( 'books' )
)

const Genre = Object.assign( 
  {},
  genericFunctions( 'genres' )
)

const User = Object.assign(
  {
    find: (email, password) => {
      const fields = [ 'id', 'email', 'name', 'bio', 'img_url', 'admin' ]
      const where = [ {email}, {password} ]

      return db.one( 
        (new SimpleSelect( 'users', { where, fields } )).toString()
      )
    }
  },
  genericFunctions( 'users' )
)

export { Book, Genre, User }
