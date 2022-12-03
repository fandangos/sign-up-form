let password = document.getElementById('passwordInput');
let passConfirm = document.getElementById('confirmInput');
let matchText = document.getElementById('match');

function comparePassword() {
    if (password.value == passConfirm.value) {
        matchText.style.display = 'none';
        password.style.border = '';
        passConfirm.style.border = '';
    } else {
        matchText.style.display = 'block';
        password.style.border = 'red solid 1px';
        passConfirm.style.border = 'red solid 1px';
    }
} 

password.addEventListener('input', comparePassword);
passConfirm.addEventListener('input', comparePassword);

