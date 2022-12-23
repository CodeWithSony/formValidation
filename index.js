console.log("hello ha-rry with form validation.");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
let validUser = false;
let validEmail = false;
let validPhone = false;
$("#failure").hide();
$("#success").hide();
console.log(userName, email, address, phone);

userName.addEventListener("blur", () => {
  console.log("Name is blured");
  //Validate name here
  let regex = /^([a-zA-Z])([0-9a-zA-Z]){2,10}$/; //dolloar means must end with. ^means must start with
  let str = userName.value;

  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Username is valid");
    console.log("Our test function is ", regex.test(str));
    userName.classList.remove("is-invalid");
    validUser = true;
  } else {
    console.log("username is invalid.");
    userName.classList.add("is-invalid");
    validUser = false;
  }
});
email.addEventListener("blur", () => {
  console.log("email is blured");
  //Validate email here 
  //sahu.priyanka2122@gmail.com
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; //dolloar means must end with ^means must start with


  let str = email.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your email is valid");
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    console.log("Your email is not valid.");
    email.classList.add("is-invalid");
    validEmail = false;
  }
});
phone.addEventListener("blur", () => {
  console.log("phone is blured");
  //Validate phone here
  let regex = /^[(0-9)]{10}$/; //dolloar means must end with ^means must start with
  let str = phone.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your phone number is valid");
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    console.log("doesYour phone number is not valid");
    phone.classList.add("is-invalid");
    validPhone = false;
  }
});

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("YOu clickecd on submit.");
  console.log(validEmail, validPhone, validUser);
  //submit your form here
  //fetch api se
  if (validEmail && validPhone && validUser) {
   
    let success = document.getElementById("success");

    success.classList.add("show");
    // failure.classList.remove("show");
    // $("#failure").alert("close");
    $("#failure").hide();
    $("#success").show();
  } else {
    let failure = document.getElementById("failure");
    // let success = document.getElementById("success");

    console.log(
      "One of Phone, email and user are not valid, Hense not submitting the form please correct the errors and try again."
    );
    failure.classList.add("show");
    // success.classList.remove("show");
    $("#success").hide();
    $("#failure").show();
  }
});
