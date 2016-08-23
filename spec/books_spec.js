import Books from '../models/books'
      
describe ( 'Books', () => {
  it ('gets all books', () => {
    const book = new Books()
    expect ( book.getAllBooks() ).toEqual('SELECT * FROM books')
  })
})