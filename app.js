// Depois da correção
function login(user) {
    if (!user) {
      console.error("Erro: Usuário inválido");
      return;
    }
    console.log("Login bem-sucedido");
  }
  
  login(null);
  