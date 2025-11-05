import pool from "./db.js";
import bcrypt from "bcrypt";

export async function criarUsuario(nome, email, senha) {
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const query = `
    INSERT INTO usuarios (nome, email, senha)
    VALUES ($1, $2, $3)
    RETURNING id, nome, email, criado_em;`;

    const values = [nome, email, senhaCriptografada];

    const result = await pool.query(query, values);
    return result.rows[0]
}

export async function buscarUsuarioPorEmail(email) {
    const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);

    return result.rows[0];
}

