import User from "../models/User.js"

class UserService {
    constructor() { }

    async findAll() {
        return await User.find();
    }


    async create(user) {
        return await User.create(user);
    }

    async delete(user) {
        return await User.delete(user);
    }
}

export default new UserService()
