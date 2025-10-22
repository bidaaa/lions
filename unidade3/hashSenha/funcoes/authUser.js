import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config(); 

export function authUser(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).send("Token invalido")
    
    const token = authHeader.startsWith('bearer ') ? authHeader.slice(7) : authHeader;
    
    try {
        const secret = process.env.JWT_SECRET 
        if (!secret) {
            console.log('JWT secret não configurado');
            return res.status(500).send("Erro ao criar");
        }
        console.log('Verificando token:', token);
        const decoded = jwt.verify(token, secret);
        console.log('Token decodificado com sucesso:', decoded);
        req.user = decoded;
        next();
    } catch (error) {
        console.log('Erro ao verificar token:', error.message);
        return res.status(401).send("Token inválido")
    }
}