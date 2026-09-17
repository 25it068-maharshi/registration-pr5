document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting/refreshing the page instantly
    event.preventDefault();

    // Fetch values from the form inputs
    const fullName = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // 1. Validate Phone Number (10 digits check)
    const phonePattern = /^[0-9]{10}\$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // 2. Validate Password Matching
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please verify your typing.");
        return;
    }

    // 3. Password Strength (Minimum length check)
    if (password.length < 6) {
        alert("For security, your password must be at least 6 characters long.");
        return;
    }

    // Simulation of a successful form payload dispatch
    alert(`Registration Successful!\nWelcome to college, ${fullName}!`);
    
    // Clear the form fields after successful validation
    document.getElementById('registrationForm').reset();
});
