import jwt from 'jsonwebtoken';

const createJWTTokken = (user) => {
    return jwt.sign({ user }, 'secretkey', { expiresIn: '1h' });
}

export default {
    createJWTTokken
}