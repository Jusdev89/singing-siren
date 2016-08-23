import SimpleSelect from '../models/simple_select'

describe ( 'SimpleSelect', () => {
  describe( '#constructor', () => {
    it( 'throws when no parameters are provided', () => {
      expect( () => new SimpleSelect() ).toThrow( 'Table parameter is required' )
    })

    it( 'throws when a non string parameter is provided', () => {
      expect( () => new SimpleSelect( 1 ) ).toThrow( 'Table parameter must be string' )
    })
  })

  describe( '#toString', () => {
    it( 'returns a SELECT * SQL statement', () => {
      const query = new SimpleSelect( 'blargathon' )

      expect( query.toString() ).toEqual( 'SELECT * FROM blargathon' )
    })

    it( 'returns a SELECT SQL statement with specific fields, when fields provided', () => {
      const query = new SimpleSelect( 'blargathon', {fields: ['blork', 'blarg'] })

      expect( query.toString() ).toEqual( 'SELECT blork, blarg FROM blargathon' )
    })

    it( 'returns a SELECT SQL statement with WHERE clause, when filter specified', () => {
      const query = new SimpleSelect( 'blargathon', { where: [{ id: 3 }] })

      expect( query.toString() ).toEqual( 'SELECT * FROM blargathon WHERE id=3')
    })

    it( 'return a SELECT SQL statement with complex WHERE clause, when filters specified', () => {
      const query = new SimpleSelect( 'blargathon', { where: [{ id: 3 }, {a: 2}] })

      expect( query.toString() ).toEqual( 'SELECT * FROM blargathon WHERE id=3 AND a=2')
    })
  })
})


/*
*****jrob, how the fuck do we make this work w reset password?
edit bio?
general crud user things
how to test bio editing
how to test set string0
*/