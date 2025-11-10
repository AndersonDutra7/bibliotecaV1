document.getElementById("formCadastro").addEventListener("submit", async (e) => {
    
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const mensagem = document.getElementById("mensagem");
    

    try {
        const response = await fetch ("http://localhost:3000/api/users/register", {
        
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ nome, email, senha })
        })

    const data = await response.json();
    if (response.ok) {
        mensagem.style.color = "green";
        mensagem.textContent = data.mensagem;
        document.getElementById("formCadastro").reset(); 
    } else {
        mensagem.style.color ="red";
        mensagem.textContent = data.erro;
    }

    } catch (error) {
        mensagem.style.color = "red";
        mensagem.textContent = "Erro ao conectar com o servidor!";
    }
});