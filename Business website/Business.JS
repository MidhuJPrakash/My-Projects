function validateName() {
  var customer_name = document.getElementById("customer_name").value;
  let name_error = document.getElementById("name_error");

  if (name_error) {
    if (!customer_name) {
      document.getElementById("name_error").innerHTML =
        "Name should not be left empty";
    } else if (customer_name.length <= 2) {
      document.getElementById("name_error").innerHTML =
        "Name must contain 3 or more letters ";
    } else {
      document.getElementById("name_error").innerHTML = " ";
    }
  }
}

function validatePhonenumber() {
  let phone_number = document.getElementById("phone_number").value;
  let phone_error = document.getElementById("phone_error");

  if (phone_error) {
    if (phone_number.trim() == "") {
      document.getElementById("phone_error").innerHTML =
        "Please enter your phone number";
    } else if (phone_number.length < 10 || phone_number.length > 10) {
      document.getElementById("phone_error").innerHTML =
        "Enter 10 digit phone number";
    } else {
      document.getElementById("phone_error").innerHTML = " ";
    }
  }
}

function validateEmail() {
  var email_id = document.getElementById("email_id").value;

  const regex_pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let email_error = document.getElementById("email_error");

  if (email_error) {
    if (!regex_pattern.test(email_id)) {
      document.getElementById("email_error").innerHTML =
        "Please enter a valid email id";
    } else {
      document.getElementById("email_error").innerHTML = " ";
    }
  }
}

function onFormSubmit() {
  let isValid = validateForm();

  if (isValid) {
    console.log("Form is valid and ready to submit");
  }
}

function validateForm() {
  validateName();
  validateEmail();
  validatePhonenumber();

  let errorNodes = document.getElementsByClassName("form-error");
  return !!errorNodes?.length;
}
