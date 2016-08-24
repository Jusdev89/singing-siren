class SimpleJoin {
  constructor (table,options={}){
    if( table === undefined  ) {
      throw 'Table parameter is required'
    } else if( typeof( table ) !== 'string' ) {
      throw( 'Table parameter must be string' )
    }

    this.table = table
    this.fields = options.fields || []
    this.filter = options.where || []

    this.combine = options.join[0] || []
    this.on = options.on || []
    this.id = options.in || []
  }

  toString() {
    return `SELECT ${this.sqlFields()} FROM ${this.table} JOIN ${this.combine} ${this.onSql()} ${this.where()} IN ($1:csv)`
  }

  sqlFields() {
    return this.fields.map( 
      field => field.indexOf( '.' ) === -1 ? `${field}.*` : field 
    ).join( ', ' )
  }

  onSql(){
    return `ON ${this.on[1]} = ${this.on[0]}`
  }

  where() {
    return `WHERE ${this.filter[0].field_id}`
  }
}

export default SimpleJoin
