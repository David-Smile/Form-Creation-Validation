// Initialize form validation
function initializeFormValidation() {
    // Form and feedback elements selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Check if required elements exist
    if (!form || !feedbackDiv) {
        console.error('Required form elements not found');
        return;
    }

    // Form submission event listener
    form.addEventListener('submit', handleFormSubmit);
}

// Handle form submission
function handleFormSubmit(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get and trim input values
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Check if all input elements exist
    if (!usernameInput || !emailInput || !passwordInput) {
        console.error('Required input elements not found');
        return;
    }

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Initialize validation variables
    let isValid = true;
    const messages = [];

    // Username validation
    if (username.length < 3) {
        isValid = false;
        messages.push('Username must be at least 3 characters long');
    }

    // Email validation
    if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        messages.push('Please enter a valid email address');
    }

    // Password validation
    if (password.length < 8) {
        isValid = false;
        messages.push('Password must be at least 8 characters long');
    }

    // Display feedback
    const feedbackDiv = document.getElementById('form-feedback');
    feedbackDiv.style.display = 'block';
    
    if (isValid) {
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
    } else {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = '#dc3545';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeFormValidation);
