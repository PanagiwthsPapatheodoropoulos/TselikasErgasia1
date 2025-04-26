document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');


    validateLogin = () =>{
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if(username === ''){
            alert('Username cannot be empty!');
            return false;
        }

        if(password === ''){
            alert('Password cannot be empty!');
            return false;
        }

        return true;
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateLogin()) {
            alert('Logged in successfully!');
        }
    });
});