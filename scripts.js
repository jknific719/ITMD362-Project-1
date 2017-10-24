window.onload = function(){
  document.getElementById("signup").addEventListener('submit', validateForm);
}

function validateForm(event) {
var n = document.signup.name.value;
var e = document.signup.email.value;
var a = document.signup.addr.value;
var z = document.signup.zip.value;
var p = document.signup.phone.value;
var b = document.signup.bday.value;
  if (n == "") {
    alert("Hey! You forgot to put in your name!")
    event.preventDefault();
  }
  else if (e == "") {
    alert("Hey! You forgot to put in your email!")
    event.preventDefault();
  }
  else if (a == "") {
    alert("Hey! You forgot to put in your address!")
    event.preventDefault();
  }
  else if (z == "") {
    alert("Hey! You forgot to put in your Zip code!")
    event.preventDefault();
  }
  else if (p == "") {
    alert("Hey! You forgot to put in your phone number!")
    event.preventDefault();
  }
  else if (b == "") {
    alert("Hey! You forgot to put in your birthday!")
    event.preventDefault();
  }
  /* Currently non-functioning
  function hideForm(){
    var f = document.getElementById('form');
    var i = document.getElementById('fin');
    f.style.display = 'none';
    i.style.display = 'block';
  }
  function formFunct(){
    validateForm();
    hideForm();
  }
  */
}
