import jwt from 'jsonwebtoken';

const createJWTTokken = (user) => {
    return jwt.sign({ user }, 'secretkey', { expiresIn: '30m' });
}

export default {
    createJWTTokken
}