
//Show sign-in form
function showSignInForm() {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('signInForm').classList.remove('hidden');
}

// Show login form
function showLoginForm() {
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('signInForm').classList.add('hidden');
}


// Toggle password visibility
function togglePassword(fieldId) {
  const passwordField = document.getElementById(fieldId);
  const passwordFieldType = passwordField.type === 'password' ? 'text' : 'password';
  passwordField.type = passwordFieldType;
}



// Save credentials for sign-in
function signIn() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('signInUsername').value;
  const password = document.getElementById('signInPassword').value;

  if (firstName && lastName && mobile && email && username && password) {
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('mobile', mobile);
      localStorage.setItem('email', email);
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      alert('Sign In successful! Now you can log in.');
      showLoginForm();
  } else {
      alert('Please fill in all fields.');
  }
}

// Check credentials for login
function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
      alert('Login successful!');
      showProfile();
  } else {
      alert('Invalid username or password.');
  }
}

// Show profile information
function showProfile() {
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const email = localStorage.getItem('email');

  document.getElementById('profileFirstName').textContent = firstName;
  document.getElementById('profileLastName').textContent = lastName;
  document.getElementById('profileemail').textContent = email;

  document.getElementById('signInContainer').classList.add('hidden');
  document.getElementById('profileContainer').classList.remove('hidden');
}

// Logout function
function logout() {
  document.getElementById('signInContainer').classList.remove('hidden');
  document.getElementById('profileContainer').classList.add('hidden');
}
document.getElementById('backButton').addEventListener('click', function() {
  window.location.href = 'index.html';
});
document.getElementById('backButton1').addEventListener('click', function() {
  window.location.href = 'login.html';
});
document.getElementById('backButton2').addEventListener('click', function() {
  window.location.href = 'login.html';
});
