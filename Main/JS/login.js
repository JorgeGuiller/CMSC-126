document.addEventListener('DOMContentLoaded', function() {
    // Login page
    var loginSubmitButton = document.querySelector('.form-container-login .submit-btn');
    if (loginSubmitButton) {
      loginSubmitButton.addEventListener('click', function(event) {
        event.preventDefault();
        var usernameInput = document.querySelector('.form-container-login .input-field[type="text"]');
        var passwordInput = document.querySelector('.form-container-login .input-field[type="password"]');
        var username = usernameInput.value;
        var password = passwordInput.value;
        console.log('Login - Username:', username);
        console.log('Login - Password:', password);
        usernameInput.value = '';
        passwordInput.value = '';
      });
    }
  
    // Register page
    var registerSubmitButton = document.querySelector('.form-container-register .submit-btn');
    if (registerSubmitButton) {
      registerSubmitButton.addEventListener('click', function(event) {
        event.preventDefault();
        var usernameInput = document.getElementById('username');
        var emailInput = document.getElementById('email');
        var passwordInput = document.getElementById('password');
        var confirmPasswordInput = document.getElementById('confirm-password');
        var username = usernameInput.value;
        var email = emailInput.value;
        var password = passwordInput.value;
        var confirmPassword = confirmPasswordInput.value;
        console.log('Register - Username:', username);
        console.log('Register - Email:', email);
        console.log('Register - Password:', password);
        console.log('Register - Confirm Password:', confirmPassword);
        usernameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
      });
    }
  
    // Forgot Password page
    var forgotPasswordSubmitButton = document.querySelector('.form-container-forgot .submit-btn');
    if (forgotPasswordSubmitButton) {
      forgotPasswordSubmitButton.addEventListener('click', function(event) {
        event.preventDefault();
        var emailInput = document.getElementById('email');
        var passwordInput = document.getElementById('password');
        var confirmPasswordInput = document.getElementById('confirm-password');
        var email = emailInput.value;
        var password = passwordInput.value;
        var confirmPassword = confirmPasswordInput.value;
        console.log('Forgot Password - Email:', email);
        console.log('Forgot Password - New Password:', password);
        console.log('Forgot Password - Confirm Password:', confirmPassword);
        emailInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
      });
    }
  });
  