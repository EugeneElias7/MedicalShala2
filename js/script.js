function handleLogin() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (!email || !password) {
      alert('Please fill all fields');
      return;
  }
  // Add login logic here (e.g., API call)
  alert('Login successful!');
  // Redirect to inbox or dashboard
  window.location.href = 'inbox.html';
}

function handleSignup() {
  const name = document.getElementById('signup-name').value;
  const specialization = document.getElementById('signup-specialization').value;
  const hospital = document.getElementById('signup-hospital').value;
  const email = document.getElementById('signup-email').value;
  const phone = document.getElementById('signup-phone').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;
  const terms = document.getElementById('terms').checked;

  if (!name || !specialization || !hospital || !email || !phone || !password || !confirmPassword || !terms) {
      alert('Please fill all fields and accept Terms & Conditions');
      return;
  }
  if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
  }
  // Add signup logic here (e.g., API call)
  alert('Registration successful!');
  // Redirect to login
  window.location.href = 'login.html';
}