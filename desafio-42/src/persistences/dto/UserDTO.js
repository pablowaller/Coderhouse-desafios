class UserDTO {

    constructor( id, username, password, text ) {
        this._id = id;
        this.username = username;
        this.password = password;
    }

    getId(){ return this.id }
    getUsername() { return this.username }
    getPassword() { return this.password }
}

module.exports = UserDTO;