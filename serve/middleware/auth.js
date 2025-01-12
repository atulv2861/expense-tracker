// jwt loign form header
const jwt = require('jsonwebtoken');
const User = require('../schema/userSchema');

class Auth{
    async isAuthenticated(req, res, next) {
        try {
            //console.log(req.headers['authorization'])
            const token = req.headers['authorization'].split(' ')[1];
            if (!token) {
                return res.status(401).json({
                    success: false,
                    message: 'Token not provided'
                });
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user =await User.findOne({_id:decoded._id}).select("-password")
            if (!user) {
                return res.status(403).json({
                    success: false,
                    message: 'User not found'
                });
            }
            req.user = user;
            next();
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: 'Invalid token'
            });
        }
    }
}

module.exports = new Auth();