let password = document.getElementById('passwordInput');
let passConfirm = document.getElementById('confirmInput');
let matchText = document.getElementById('match');

function comparePassword() {
    if (password.value == passConfirm.value) {
        matchText.style.opacity = '0';
        password.style.border = '';
        passConfirm.style.border = '';
    } else {
        matchText.style.opacity = '1';
        password.style.border = 'red solid 1px';
        passConfirm.style.border = 'red solid 1px';
    }
} 

password.addEventListener('input', comparePassword);
passConfirm.addEventListener('input', comparePassword);

