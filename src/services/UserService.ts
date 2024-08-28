import User from "../models/User"

interface IUser {
    username: string
    email: string
    password: string
}

class UserService {
    constructor() { }

    async findAll() {
        return await User.find();
    }


    async create(user: IUser) {
        return await User.create(user);
    }

    async delete(user: string) {
        return await User.findByIdAndDelete(user);
    }
}

export default new UserService()
