import { AuthService } from "./authService.js";

const authService = new AuthService

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authrization?.split(",")[1]
    try {
        // decode the token and verity 
        const decoded = authService.verifyToken(token)
        req.user = decoded
        next()
    } catch (error) {
         res.status(401).json({ message: 'Unauthorized' });
    }
};

export {authMiddleware}