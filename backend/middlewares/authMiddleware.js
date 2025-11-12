import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export function autenticarToken(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ erro: "Acesso negado. Token ausente." });
  }

  try {
    const usuario = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = usuario;
    next();
  } catch (error) {
    return res.status(403).json({ erro: "Token inválido ou expirado." });
  }
}
