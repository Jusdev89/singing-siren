import SimpleDelete from '../models/simple_delete'

describe ( 'SimpleDelete', () => {
  describe( '#constructor', () => {
    it( 'throws when no table parameter is provided', () => {
      expect( () => new SimpleDelete() ).toThrow( 'Table parameter is required' )
    })

    it( 'throws when a non string parameter is provided for table', () => {
      expect( () => new SimpleDelete( 1 ) ).toThrow( 'Table parameter must be string' )
    })

    it( 'throws when no id parameter is provided', () => {
      expect( () => new SimpleDelete('books') ).toThrow('ID field is required')
    })
  })

  describe( '#toString', () => {
    it( 'generate the DELETE SQL statement', () => {
      expect( ( new SimpleDelete( 'nyet', 1 ) ).toString() ).toEqual(
        "DELETE FROM nyet WHERE id=1"
      )
    })
  })
})