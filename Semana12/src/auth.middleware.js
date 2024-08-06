import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {

    const token = req.headers.authorization;

    try {
        const data = jwt.verify(token, 'SECRET');
        req.user = data;
        next();
    } catch (error) {
        console.log({ error });
        res.status(403).send("NAO AUTENTICADO");
    }
}
