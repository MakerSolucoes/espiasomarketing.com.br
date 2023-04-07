function checkAuth() {
  const atual_url = window.location.href;
  const username = "espia";
  const password = "espia@2023";
  const promptText = "Digite seu usuário e senha no padrão usuario:senha";
  console.log(atual_url)
  if (atual_url !== "https://espiasomarketing.com.br.loc") {
    return;
  }else{
    const credentials = prompt(promptText);
    if (credentials !== `${username}:${password}`) {
      alert("Usuário ou senha inválidos!");
    }
  }
}
  
checkAuth();
  