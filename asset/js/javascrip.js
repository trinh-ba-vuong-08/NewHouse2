// search header
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    menuForm.classList.remove('active');
}
// login user
let loginForm = document.querySelector('.login-form-container')

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active')
    searchForm.classList.remove('active');
    menuForm.classList.remove('active');
}
// dấu x của user
let formClose = document.querySelector('#form-close');

formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active')
});

// menu mobile
let menuForm = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    menuForm.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active'); 
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    menuForm.classList.remove('active');
}