// Funções para alternar entre login e cadastro
function switchToRegister() {
    document.querySelector('.login-form').classList.add('hidden');
    document.querySelector('.register-form').classList.remove('hidden');
}

function switchToLogin() {
    document.querySelector('.register-form').classList.add('hidden');
    document.querySelector('.login-form').classList.remove('hidden');
}
