import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const createJWTTokken = (user) => {
    return jwt.sign({ user }, process.env.JWTTOKEN, { expiresIn: '1h' });
}

export default {
    createJWTTokken
}