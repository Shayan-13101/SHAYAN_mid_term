const form = document.getElementById("form");

    const fullName = document.getElementById("fullName_input");
    const email = document.getElementById("email_input");
    const phoneNo = document.getElementById("phoneNo_input");
    const DOB = document.getElementById("DOB_input");

    function setError(field, message) {
      const errorDiv = document.getElementById(field.id + "Error");
      errorDiv.textContent = message;
      field.classList.add("error-border");
    }

    function clearError(field) {
      const errorDiv = document.getElementById(field.id + "Error");
      errorDiv.textContent = "";
      field.classList.remove("error-border");
    }

    function validatefullName() {
      if (fullName.value === "") {
        setError(userType, "Please enter your name.");
        return false;
      } else {
        clearError(fullName);
        return true;
      }
    }

    function validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        setError(email, "Email is required.");
        return false;
      } else if (!emailPattern.test(email.value.trim())) {
        setError(email, "Please enter a valid email address.");
        return false;
      } else {
        clearError(email);
        return true;
      }
    }

    function validatephoneNo() {
      const pNo = phoneNo.value;
      const num = /[0-9]/;

      if (pNo=="") {
        setError(phoneNo, "Phone Number is required.");
        return false;
      } else if (pNo.length()>11) {
        setError(phoneNo, "Please enter correct Number");
        return false;
      }else {
        clearError(phoneNo);
        return true;
      }
    }

