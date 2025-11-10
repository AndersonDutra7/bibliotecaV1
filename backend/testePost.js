import fetch from "node-fetch";

async function testePost() {
  const response = await fetch("http://localhost:3000/api/users/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "Anderson",
      email: "teste@teste.com",
      senha: "Senha@123"
    }),
  });

  const data = await response.json();
  console.log(data);
}

testePost();
