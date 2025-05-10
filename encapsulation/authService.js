import "dotenv/config"
import jwt from "jsonwebtoken"


class AuthService{
    #secretToken = process.env.JWT_SECRET
    #expireTime = process.env.EXPIRES_IN
    #refreshToken = new Set()

    generateToken(payload){
       const token = jwt.sign(payload, this.#secretToken, {expiresIn: this.#expireTime})
       this.#refreshToken.add(token)
       return token
    }

    verifyToken(token){
        return jwt.verify(token, this.#secretToken)
    }

    revokeToken(token){
        this.#refreshToken.delete(token)
    }

    isTokenRevoked(token){
        return !this.#refreshToken.has(token)
    }
}

export { AuthService}