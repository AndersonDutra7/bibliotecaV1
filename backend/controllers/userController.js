import { criarUsuario, buscarUsuarioPorEmail } from "../models/userModel";

export async function registrarUsuario(req, res) {
   try {
    const {nome, email, senha} = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json(
            {erro: "Preencha todos os campos"}
        )
    }

    const senhaForte = /^(?=.*[A-Z])(?=.*[!@#$%^^&*]).{6,}$/;
    if (!senhaForte.test(senha)){
        return res.status(400).json(
            {erro: "A senha deve ter pelo menos 6 caracteres, uma letra maiúscula e uma caractere especial"}
        )
    }

    const usuarioExistente = await buscarUsuarioPorEmail(email);
    if (usuarioExistente) {
        return res.status(400).json(
            {erro: "E-mail já cadastrado"},
        );
    }


   } catch (error) {
    
   }
}