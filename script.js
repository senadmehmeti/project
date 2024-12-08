console.log("Script loaded successfully!");
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    navbar.classList.toggle('active');  
    menu.classList.toggle('fa-times');

}

window.onscroll = () =>{
    navbar.classList.toggle('active');  
    menu.classList.toggle('fa-times');
    
}

document.querySelector('#search-icon').onclick = () =>{
 document.querySelector('#search-form').classList.toggle('active');
     
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
        
   }



// validimi per register
   document.getElementById('registerForm').addEventListener('submit', function (e) {
    
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    
    if (!name || !surname || !username || !password) {
        alert("All fields are required!");
        e.preventDefault(); 
        return;
    }

    
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(name)) {
        alert("Name can only contain letters!");
        e.preventDefault();
        return;
    }
    if (!nameRegex.test(surname)) {
        alert("Surname can only contain letters!");
        e.preventDefault();
        return;
    }


    if (username.length < 3 || /\s/.test(username)) {
        alert("Username must be at least 3 characters and contain no spaces!");
        e.preventDefault();
        return;
    }

   
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert(
            "Password must be at least 8 characters long and contain both letters and numbers!"
        );
        e.preventDefault();
        return;
    }


    alert("Form submitted successfully!");
});




//validimi per login form

document.getElementById('loginForm').addEventListener('submit', function (e) {
   
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert("Both Username and Password are required!");
        e.preventDefault(); 
        return;
    }

    if (username.length < 3 || /\s/.test(username)) {
        alert("Username must be at least 3 characters long and contain no spaces!");
        e.preventDefault();
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        e.preventDefault();
        return;
    }

    alert("Login successful!");
});


