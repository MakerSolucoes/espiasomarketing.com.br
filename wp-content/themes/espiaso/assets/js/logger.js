function checkAuth() {
  const atual_url = window.location.href;
  const username = "espia";
  const password = "espia@2023";

  const cookies = document.cookie.split("; ");
  const loginCookie = cookies.find(cookie => cookie.startsWith("login="));
  if (loginCookie) {
    const [, credentials] = loginCookie.split("="); 
    if (credentials === `${username}:${password}`) {
      console.log("Usuário autenticado!");
      return;
    }
  }

  const promptText = "Digite seu usuário e senha no padrão usuario:senha";
  const credentials = prompt(promptText);
  if (credentials !== `${username}:${password}`) {
    alert("Usuário ou senha inválidos!");
    checkAuth();
  } else {
    const date = new Date();
    date.setTime(date.getTime() + 12 * 60 * 60 * 1000); // 12 horas em milissegundos
    const expires = "expires=" + date.toUTCString();
    document.cookie = `login=${credentials};${expires};path=/`;
  }
}

checkAuth();
