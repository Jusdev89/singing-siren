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
        return Object.keys( object ).map( key => `${key}='${object[key]}'`)
      }).reduce( (a, b) => a.concat( b ), [] )

      return ` WHERE ${clause.join( ' AND ' )}`
    }
  }

  offset() {
    //if total # of results is < 10 return result
    //else return # of results 
    //results / 10 = # of pages
    //how get offset? (units - 1)*10
    if( this.fields.length === 0 ) {
      return ''
    } else {



      return ` LIMIT 10 OFFSET ${offset}`
    }
    // const resultTotal = results/10
    // for ( i = 0, i <= resultTotal, i++){
    //   let offset += 1
    //   offset * 10
    //   return offset
    // }
    // offset -10

    
  }
}

// 25 results
// 2.5 pages
// for loop?

export default SimpleSelect

