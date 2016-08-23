class SimpleInsert {
  constructor (table,options={}){
    if( table === undefined  ) {
      throw 'Table parameter is required'
    } else if( typeof( table ) !== 'string' ) {
      throw( 'Table parameter must be string' )
    }

    this.table = table
    this.columns = options.columns || []
    this.values = options.values || []
  }

  toString(){
    return `INSERT INTO ${this.insertInto()} VALUES ${this.insertValues()}`
  }


  insertInto(){
    return `${this.table}(${this.columns.join(', ')})`
  }

  insertValues(){
    return `(${this.values.join(', ')})`
  }
}

export default SimpleInsert