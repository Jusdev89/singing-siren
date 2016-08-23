"use strict";

const databaseName = 'bookstore'
const connectionString = `postgres://${process.env.USER}@localhost:5432/${databaseName}`;
const pgp = require('pg-promise')();
const db = pgp(connectionString);

import SimpleSelect from './models/simple_select'

const getAllBooks = function() {
  const query = new SimpleSelect( 'books' )
  return db.any(query.toString())
}

const Book = {
  all: () => db.any( (new SimpleSelect( 'books' )).toString() )
}

export { Book }

