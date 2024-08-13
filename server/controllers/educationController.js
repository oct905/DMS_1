const { EducationHistory } = require('../models')

class EducationController {
    static async create(req, res, next) {
        try {
            const { degree, major, university, userId } = req.body;
            const payload = {
                degree,
                major,
                university,
                userId
            }
            const education = await EducationHistory.create(payload);
            res.status(201).json({
                msg: 'Education created successfully'
            });
        } catch (err) {
            console.log(err);
            next(err)
        }
    }
    static async update(req, res, next) {
        try {
            const { degree, major, university, userId } = req.body;
            const payload = {
                degree,
                major,
                university,
                userId
            }
            const education = await EducationHistory.update(payload, {
                where: {
                    userId
                }
            });
            res.status(200).json({
                msg: 'Education updated successfully'
            });
        } catch (err) {
            console.log(err);
            next(err)
        }
    }
}

module.exports = EducationController;