function handleSubmit(event) {
  event.preventDefault();
  let fName = document.getElementById("first_name").value;
  let lName = document.getElementById("last_name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let goAhead = false; // to check whether all field are validated or not

  //this regular expression is to check valid email address
  var regEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi;

  //first name validation
  if (fName == "") {
    document.getElementById("first_name_error").innerHTML =
      "This field is required";
    goAhead = false;
  } else {
    document.getElementById("first_name_error").innerHTML = "";
    goAhead = true;
  }
  //last name validation

  if (lName == "") {
    document.getElementById("last_name_error").innerHTML =
      "This field is required";
    goAhead = false;
  } else {
    document.getElementById("last_name_error").innerHTML = "";
    goAhead = true;
  }
  //email validation
  if (email == "") {
    document.getElementById("email_error").innerHTML = "This field is required";
    goAhead = false;
  } else if (!email.match(regEx)) {
    document.getElementById("email_error").innerHTML = "Invalid email address";
    goAhead = false;
  } else {
    goAhead = true;
    document.getElementById("email_error").innerHTML = "";
  }

  //password validation
  if (password == "") {
    document.getElementById("password_error").innerHTML =
      "This field is required";
    goAhead = false;
  } else if (password.length < 8) {
    document.getElementById("password_error").innerHTML =
      "Password must be 8 character long";
    goAhead = false;
  } else {
    document.getElementById("password_error").innerHTML = "";
    goAhead = true;
  }

  // submitting data
  if (goAhead) {
    alert("Sucess");
  }
}
