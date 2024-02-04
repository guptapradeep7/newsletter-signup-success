let x = document.getElementsByClassName("mailid")[0];
const urlParams = new URLSearchParams(window.location.search);
let email = urlParams.get('email');
x.textContent = email;

