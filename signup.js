const mockUser = {
    email: "test@example.com",
    password: "123456"
  };
  
function handleSignup(event) {
    event.preventDefault(); 
    
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
  
    alert(`Signup successful!\nName: ${name}\nEmail: ${email}`);
    
  }