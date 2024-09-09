const form = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Your login information has been store")
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userData = {
        password,
        username
    };
    console.log(userData);
});