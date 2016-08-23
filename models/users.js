class UsersSql {
  constructor ( options={}){
    this.user = options[ 'id' ]
    this.password = options[ 'userPassword' ]
    this.bio = options[ 'userBio' ]
  }

  getAllUsers() {
    return 'SELECT * FROM users'
  }

  getUser(){
    return `SELECT users.* FROM users WHERE id=${this.user}`
  }

  getBio(){
    return `SELECT users.bio FROM users WHERE id=${this.user}`
  }

  setBio( newPass ){
    return 'SELECT '
  }
}

export default UsersSql
