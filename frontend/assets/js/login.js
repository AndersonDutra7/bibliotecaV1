document.getElementById("formLogin").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const mensagem = document.getElementById("mensagem");

  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const data = await response.json();

    if (response.ok) {
      mensagem.style.color = "green";
      mensagem.textContent = "Login realizado com sucesso!";

      // Armazena o token no localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.usuario));

      // Redireciona para o dashboard
      setTimeout(() => (window.location.href = "index.html"), 1000);
    } else {
      mensagem.style.color = "red";
      mensagem.textContent = data.erro;
    }
  } catch (error) {
    mensagem.style.color = "red";
    mensagem.textContent = "Erro ao conectar com o servidor.";
  }
});
