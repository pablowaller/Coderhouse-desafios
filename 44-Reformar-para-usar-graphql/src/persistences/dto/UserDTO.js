class UserDTO {
    #id
    #username
    #password

    constructor( id, username, password ) {
        this.#_id = id;
        this.#username = username;
        this.#password = password;
    }

    getId(){ return this.#id }
    getUsername() { return this.#username }
    getPassword() { return this.#password }

    toJson(){
        return {
            id: this.#id,
            username: this.#username,
            password: this.#password
        }
    }
}

module.exports = UserDTO;