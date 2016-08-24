"use strict";

const databaseName = 'bookstore'
const connectionString = `postgres://${process.env.USER}@localhost:5432/${databaseName}`;
const pgp = require('pg-promise')();
const db = pgp(connectionString);

import SimpleSelect from './models/simple_select'
import SimpleJoin from './models/simple_join'


const Book = {
  all: () => db.any( (new SimpleSelect( 'books' )).toString() ),
  one: (id) => db.one( (new SimpleSelect( 'books',{ where: [{ id:id }]} )).toString() ),
  getAuthors: () => db.many(new SimpleJoin( 'books',  
        {
          fields: ['books'],
          join: ['book_authors'],
          where: [{ field_id: 'book_authors.author_id' }],
          on: [ 'book_authors.book_id', 'book.id' ]
        }
      ), [1])
}

const Genre = {
  all: () => db.any( (new SimpleSelect( 'genres' )).toString() )
}

// const Join = {
//   book_authors: () => db.any( (new SimpleSelect( 'books',  {
//           fields: ['books'],
//           join: ['book_authors'],
//           where: [{ field_id: 'book_authors.author_id' }],
//           on: [ 'book_authors.book_id', 'book.id' ],
//           in: 1 )).toString() )
// }


export { Book, Genre }