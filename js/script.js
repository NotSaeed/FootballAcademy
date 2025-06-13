document.addEventListener('DOMContentLoaded', function() {
  // Add scrolled class to header on scroll
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Form validation function
  function validateForm() {
    let isValid = true;

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const age = document.getElementById("age").value.trim();
    const program = document.getElementById("program").value;
    const experience = document.getElementById("experience").value;

    // Clear previous error messages and success message
    clearErrorMessages();

    // Validate Name
    if (name === "") {
      showError("nameError", "Full Name is required.");
      isValid = false;
    } else if (name.length < 3) {
      showError("nameError", "Name must be at least 3 characters long.");
      isValid = false;
      console.log("Put your real name");
      alert("Put your real name");
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showError("emailError", "Please enter a valid email address.");
      isValid = false;
      console.log("make it like this ex: example@gmail.com");
      alert("make it like this ex: example@gmail.com");
    }

    // Validate Phone Number (Malaysian format)
    const phonePattern = /^01[0-9]-\d{7,8}$/;
    if (!phonePattern.test(phone)) {
      showError("phoneError", "Enter a valid Malaysian phone number (e.g., 012-3456789).");
      isValid = false;
    }

    // Validate Age
    if (age === "") {
      showError("ageError", "Age is required.");
      isValid = false;
    } else if (isNaN(age) || age < 5 || age > 100) {
      showError("ageError", "Please enter a valid age between 5 and 100.");
      isValid = false;
      console.log("Your age must be bigger than 5 and less than 100");
      alert("Your age must be bigger than 5 and less than 100");
    }

    // Validate Program Selection
    if (program === "") {
      showError("programError", "Please select a program.");
      isValid = false;
      alert("Select Program");
      console.log("Select Program");
    }

    // Validate Experience Level
    if (experience === "") {
      showError("experienceError", "Please select your experience level.");
      isValid = false;
      console.log("Select experience level");
      alert("Select experience level");
    }

    // If all validations passed
    if (isValid) {
      // In a real application, you would send the form data to the server here
      document.getElementById("formSuccess").textContent = "Thank you for registering! We will contact you soon with further details.";
      document.getElementById("formSuccess").classList.add("show");

      // Reset form after successful submission
      document.getElementById("registerForm").reset();

      // Scroll to success message
      document.getElementById("formSuccess").scrollIntoView({ behavior: 'smooth' });
    }

    return false; // prevent actual form submission for this demo
  }

  // Helper function to show error messages
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.classList.add("show");

    // Highlight the corresponding input field
    const inputId = elementId.replace("Error", "");
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.style.borderColor = "#e60000";
    }
  }

  // Helper function to clear error messages
  function clearErrorMessages() {
    const errorElements = document.querySelectorAll('.form-error');
    errorElements.forEach(element => {
      element.textContent = "";
      element.classList.remove("show");
    });

    // Reset input field borders
    const inputElements = document.querySelectorAll('.form-input, .form-select');
    inputElements.forEach(element => {
      element.style.borderColor = "#ddd";
    });

    document.getElementById("formSuccess").textContent = "";
    document.getElementById("formSuccess").classList.remove("show");
  }

  // Event listeners
  const programDropdown = document.getElementById("program");
  if (programDropdown) {
    programDropdown.addEventListener("change", function() {
      console.log("Selected program: " + this.value);
    });
  }

  // Expose validateForm to global scope
  window.validateForm = validateForm;
});
