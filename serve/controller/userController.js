const User = require('../schema/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {
    async login(req, res) {
        try {
            //validate body eamil and password
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({
                    success: false,
                    message: 'Please provide email and password'
                });
            }
            
            let user = await User.findOne({ email: email });
            if (!user) {               
                return res.status(400).json({
                    success: false,
                    message: 'User does not exist'
                });
            } else {
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    return res.status(401).json({
                        success: false,
                        message: 'Invalid password'
                    });
                }
            }
            //generate token
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
            return res.json({
                success: true,
                message: 'Login successful',
                token
            });

        } catch (error) {
            //console.error(error);
            return res.status(500).json({
                success: false,
                message: error.message
            });

        }
    }

    async register(req, res) {
        try {      
            //validate body eamil and password
            const { name, email, password } = req.body;
            if (!name || !email || !password) {
                return res.status(400).json({
                    success: false,
                    message: 'Please provide name, email and password'
                });
            }
            //check if user already exists or create new user if not exists
            let user = await User.findOne({ email: email });
            if (user)
                return res.status(400).json({
                    success: false,
                    message: 'User already exist'
                });

            user = new User({
                name,
                email,
                password
            })
            await user.save();
            
            return res.json({
                success: true,
                message: 'Register successfully!',               
            });

        } catch (error) {
            //console.error(error);
            return res.status(500).json({
                success: false,
                message: error.message
            });

        }
    }

}

module.exports = new UserController();