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
    return `SELECT ${this.sqlFields()} FROM ${this.table} JOIN ${this.combine} ${this.onSql()} ${this.where()} IN ${this.id}`
  }

  sqlFields() {
    if(this.fields.length === 1) {

      return `${this.fields[0]}.*`
    } else {
      let arrfields = []

      this.fields.map((value, index) => {
        if(index > 0){
          arrfields.push(value)
        }
      })

      return `${this.fields[0]}.*, ${arrfields.join(',')}`
    }
  }

  onSql(){
    return `ON ${this.on[0].eqlTo} = ${this.on[0].join_id}`
  }

  where() {
    return `WHERE ${this.filter[0].field_id}`
  }
}

export default SimpleJoin
