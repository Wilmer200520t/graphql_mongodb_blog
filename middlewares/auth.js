import jwt from 'jsonwebtoken';

export const authentificate = (req, res, next) =>{
    const token = req.headers.authorization?.split(' ')[1];
    try {
      const verify = jwt.verify(token, "secretkey");
      req.verifiedUser = verify.user;
    } catch (e) {
      throw new Error("Invalid token");
    }finally{
        next();
    }
    
}