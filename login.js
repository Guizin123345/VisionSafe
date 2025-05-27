document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    const validUsername = "Admin";
    const validPassword = "VisionSafe01";

    if (username === validUsername && password === validPassword) {
        // Login bem-sucedido
        sessionStorage.setItem("logado", "true"); // opcional para controle
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = "Usuário ou senha inválidos. Tente novamente.";
    }
});
