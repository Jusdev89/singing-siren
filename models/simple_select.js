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

