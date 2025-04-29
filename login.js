// Mock user data (replace with a real backend for production)
const mockUser = {
  email: "test@example.com",
  password: "123456"
};

// Handle Login Form Submission
function handleLogin(event) {
  event.preventDefault(); // Prevent page refresh
  
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  if (email === mockUser.email && password === mockUser.password) {
    alert("Login successful!");
    window.location.href = "main.html"; 
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

// Handle Guest Login
function handleGuestLogin() {
  alert("Welcome, Guest!");
  window.location.href = "main.html"; // Redirect to IMDb index page
}
