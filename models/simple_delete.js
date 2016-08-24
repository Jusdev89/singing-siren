class SimpleDelete {
  constructor (table, options = {}){
    if( table === undefined  ) {
      throw 'Table parameter is required'
    } else if( typeof( table ) !== 'string' ) {
      throw( 'Table parameter must be string' )
    }else if( options === undefined ) {
      // console.log('fields', options)
      throw( 'Fields are required' )
    }else if( options.id === undefined ) {
      // console.log('where', options.id)
      // throw( 'A Where clause (your item ID) is required' )
    }

    this.table = table
    this.fields = options.fields || []
    this.values = options.values || []
    this.id = options.id || undefined
  }

  toString(){
    return `UPDATE ${this.table} SET${this.updateFields()}${this.whereClause()}`
  }

  updateFields(){
    // return `${this.fields}`
    if( this.fields.length === 0 ) {
      return ''
    } else {
      const clause = this.fields.map( object => {
        return Object.keys( object ).map( key => `${key}=${object[key]}`)
      }).reduce( (a, b) => a.concat( b ), [] )
      return ` ${clause.join( ', ' )}`
    }
  }

  whereClause(){
    if( this.id === undefined) {
      return ''
    } else {
      return ` WHERE id=${this.id}`
    }
    
  }
}

export default SimpleDelete