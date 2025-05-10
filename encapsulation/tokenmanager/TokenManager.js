import jwt from "jsonwebtoken"

class TokenManager{
    #accessSecret
    #refreshSecret
    #refreshTokens = new Set()

    constructor(accessSecret, refreshSecret){
        this.#accessSecret = accessSecret
        this.#refreshSecret = refreshSecret
    }

    generateAccessToken(payload, expire = "15m"){
        return jwt.sign(payload, this.#accessSecret, {expiresIn: expire})
    }

    generateRefreshToken(payload, expire = "1d"){
        const token = jwt.sign(payload, this.#refreshSecret, { expiresIn: expire})
        this.#refreshTokens.add(token)
        return token
    }

    verifyAccessToken(token){
        return jwt.verify(token, this.#accessSecret)
    }

    verifyRefreshToken(token){
        if(!this.#refreshTokens.has(token)) throw new Error("Revoked token")
        return jwt.verify(token, this.#refreshSecret)
    }

    revokeRefreshToken(token){
        if(!this.#refreshTokens.has(token)) throw new Error("Token revoked already.")
        this.#refreshTokens.delete(token)
    }

    isRefreshTokenValid(token){
        return this.#refreshTokens.has(token)
    }
}

export { TokenManager}