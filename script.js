
document.getElementById("loginForm").style.display = "block";

document.getElementById("signupLink").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
});

// Event listener for login link
document.getElementById("loginLink").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
});

// Login form submission
document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); 

 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "your_username" && password === "your_password") {
        
        alert("Login successful!");
        
    } else {

        document.getElementById("errorMsg").innerText = "Incorrect username or password.";
    }
});


document.getElementById("signupForm").addEventListener("submit", function(event){
    event.preventDefault(); 


    var username = document.getElementById("signupUsername").value;
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;




    alert("Sign up successful! You can now log in with your new account.");
   
});
