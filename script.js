document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        let isValid = true; // To track form validity

        // Get form field values
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        // Validate Full Name
        const nameError = document.getElementById('nameError');
        if (fullName.length < 5) {
            nameError.textContent = 'Name must be at least 5 characters long';
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }

        // Validate Email ID
        const emailError = document.getElementById('emailError');
        if (!email.includes('@')) {
            emailError.textContent = 'Enter a valid email address';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Validate Phone Number
        const phoneError = document.getElementById('phoneError');
        if (phone === '123456789' || !/^\d{10}$/.test(phone)) {
            phoneError.textContent = 'Enter a valid 10-digit phone number';
            phoneError.style.display = 'block';
            isValid = false;
        } else {
            phoneError.style.display = 'none';
        }

        // Validate Password
        const passwordError = document.getElementById('passwordError');
        const prohibitedPasswords = ['password', fullName];
        if (password.length < 8 || prohibitedPasswords.includes(password.toLowerCase())) {
            passwordError.textContent = 'Password must be at least 8 characters long and not a common word or your name';
            passwordError.style.display = 'block';
            isValid = false;
        } else {
            passwordError.style.display = 'none';
        }

        // Validate Confirm Password
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Passwords do not match';
            confirmPasswordError.style.display = 'block';
            isValid = false;
        } else {
            confirmPasswordError.style.display = 'none';
        }

        // If all validations pass, submit the form
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});
