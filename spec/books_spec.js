import Books from '../models/books'
       
describe ( 'Books', () => {
  it ('gets all books', () => {
    const book = new Books()
    expect ( book.getAllBooks() ).toEqual('SELECT * FROM books')
  })
})

/*

get all books
get book by id
get all genres
get genre by id
get author by id


*/