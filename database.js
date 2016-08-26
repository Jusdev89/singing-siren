const databaseName = 'bookstore'
const connectionString = `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const pgp = require('pg-promise')()
const db = pgp(connectionString)

import SimpleSelect from './models/simple_select'
import SimpleJoin from './models/simple_join'
import SimpleDelete from './models/simple_delete'
import SimpleInsert from './models/simple_insert'

const genericFunctions = tableName => {

  return {
    all: (page, size) => db.any( (new SimpleSelect( tableName, { page, size } )).toString()),
    one: id => db.one( (new SimpleSelect( tableName, { where: [{ id }] } )).toString() ),
    delete: id => db.none( ( new SimpleDelete( tableName, id ) ).toString() )
  }
}

//paganation
const Search = {
  forBooks: options => {
    const variables = []
    let sql = `SELECT DISTINCT(books.*) FROM books`

    if (options.search_query){
      let search_query = options.search_query
        .toLowerCase()
        .replace(/^ */, '%')
        .replace(/ *$/, '%')
        .replace(/ +/g, '%')

      variables.push(search_query)
      sql += `
      LEFT JOIN book_authors ON books.id=book_authors.book_id
      LEFT JOIN authors ON authors.id=book_authors.author_id
      LEFT JOIN book_genres ON books.id=book_genres.book_id
      LEFT JOIN genres ON genres.id=book_genres.genre_id
      WHERE LOWER(books.title)  LIKE $${variables.length}
      OR LOWER(authors.name) LIKE $${variables.length}
      OR LOWER(genres.title) LIKE $${variables.length}
      ORDER BY books.id ASC
      `
    }

    if (options.page){
      let PAGE_SIZE = parseInt( options.size || 10 )
      let offset = (parseInt(options.page) - 1) * PAGE_SIZE
      variables.push(offset)
      sql += `
      LIMIT ${PAGE_SIZE}
      OFFSET $${variables.length}
      `
    }

    return db.any(sql, variables)
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
  genericFunctions( 'books' ),
  {
    insert: data => {
      const { title, description, img_url, author, genre } = data

      return db.one( ( new SimpleInsert( 'books', {title,description,img_url} )).toString() )
        .then( result => {
          const id = result.id

          return Promise.all([
            new Promise( (resolve, reject) => resolve(id) ),
            db.none(`INSERT INTO book_authors(book_id, author_id) VALUES (${id}, ${author})`),
            db.none(`INSERT INTO book_genres(book_id, genre_id) VALUES (${id}, ${genre})`)
          ])
        })
        .then( results => {
          return new Promise( (resolve, reject) => resolve( results[0] ))
        })
    }, 
    update: data => {
      const { id, title, description, img_url } = data

      return db.one( ( new SimpleUpdate( 'books', id, { title, description, img_url } )).toString() )
        .then( result => {

          const id = result.id
          return id
        })
    }

  }
)

const Author = Object.assign(
  { },
  genericFunctions( 'authors' )
)

const Genre = Object.assign( 
  {},
  genericFunctions( 'genres' ),
  { allGenres: () => db.any( (new SimpleSelect( 'genres', { size: 1000 } )).toString()) }
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





export { Book, Genre, User, Search, Author }
