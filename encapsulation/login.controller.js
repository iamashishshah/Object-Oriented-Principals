import { AuthService } from './authService';
import User from './userSchema';

const authService = new AuthService();

const login = async (req, res) => {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
        return res
            .status(400)
            .json({ message: 'Email, password, and username are required.' });
    }

    const user = await User.findOne(email)

    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    // if user exist, create a token and set it into cookies
    const token = authService.generateToken(user)
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24
    })

    res.status(200).json({
        success: true,
        message: "User login successfuly.",
    })
};

export { login };
