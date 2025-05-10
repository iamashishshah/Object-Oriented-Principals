import { TokenManager } from "./TokenManager.js";
import "dotenv/config"

const tm = new TokenManager(process.env.ACCESS_SECRET, process.env.REFRESH_SECRET)
const userPayload = { id: 1, email: 'user@example.com' };
const accessToken = tm.generateAccessToken(userPayload)
const refreshToken = tm.generateRefreshToken(userPayload)

try {
    const decoded = tm.verifyAccessToken(accessToken)
     console.log("Verified Access Token:", decoded);
} catch (error) {
     console.error("Access token invalid:", err.message);
}