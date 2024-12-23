function validateForm() {
    // Get form elements
    var fname = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Validate Name
    var namePattern = /^[A-Za-z]{6,}$/;
    if (!namePattern.test(fname)) {
        alert("Name must contain only alphabets and be at least 6 characters long.");
        return false;
    }

    // Validate Email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    

    // Validate Phone Number
    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // If all validations pass
    alert("Registration successful!");
    return true;
}
