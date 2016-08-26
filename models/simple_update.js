class SimpleUpdate {
  constructor( table, id, fields=[] ){
    if( table === undefined  ) {
      throw 'Table parameter is required'
    } else if( typeof( table ) !== 'string' ) {
      throw( 'Table parameter must be string' )
    } else if( id === undefined ) {
      throw( 'ID is required' )
    } else if( Object.keys( fields ).length === 0 ) {
      throw( 'At least one field is required' )
    }

    this.table = table
    this.fields = fields
    this.id =id
  }

  toString() {
    return `UPDATE ${this.table} SET ${this.updateFields()} WHERE id=${this.id} RETURNING id`
  }

  updateFields() {
    return Object.keys( this.fields ).map( key => `${key}='${this.fields[ key ]}'` ).join( ', ')
  }
}

export default SimpleUpdate