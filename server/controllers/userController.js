const { User, EducationHistory } = require('../models');
const { hash, compare } = require('../utils/bcrypt');
const { signToken } = require('../utils/jwt');

class UserController {
    static async register(req, res, next) {
        try {
            const { email, password, firstName, lastName } = req.body;
            const hashedPass = hash(password)
            const payload = {
                email,
                password: hashedPass,
                firstName,
                lastName
            }
            console.log(payload);

            const user = await User.create(payload);
            console.log(user);

            res.status(201).json({
                msg: 'User created successfully'
            });
        } catch (err) {
            console.log(err);
            next(err)
        }
    }
    static async login(req, res, next) {
        try {
            const { email, password } = req.body;

            if (!email && !password) throw { status: 401 }

            const user = await User.findOne({
                where: {
                    email
                }
            });
            if (!user) throw { status: "401" }

            if (!compare(password, user.password)) throw { status: "401" }

            const payload = {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            }
            const token = signToken(payload);
            res.status(200).json({
                token
            });
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async get(req, res, next) {
        try {
            const { id } = req.loginInfo;
            const user = await User.findByPk(id, { raw: true });

            delete user.password

            res.status(200).json({
                user
            });
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async getAll(req, res, next) {
        try {
            const users = await User.findAll({ raw: true });

            users.forEach(user => {
                delete user.password
            });

            res.status(200).json({
                users
            });
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async delete(req, res, next) {
        try {
            const { id } = req.params;
            await User.destroy({
                where: {
                    id
                }
            });

            res.status(200).json({
                msg: 'User deleted successfully'
            });
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async updateProfile(req, res, next) {
        try {
            const { birthDate, gender, height, weight, address, addressDetail } = req.body;
            if (!birthDate || !gender || !height || !weight || !address || !addressDetail) throw { status: 400 }

            const { id } = req.loginInfo;

            const payload = { birthDate, gender, height, weight, address, addressDetail }
            console.log(payload);

            await User.update(payload, {
                where: {
                    id
                }
            });

            res.status(200).json({
                msg: 'User updated successfully'
            });
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}


module.exports = UserController