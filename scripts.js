function validateForm() {
  var n = document.signup.name.value;
  var e = document.signup.email.value;
  var a = document.signup.addr.value;
  var z = document.signup.zip.value;
  var p = document.signup.phone.value;
  var b = document.signup.bday.value;
window.onload = function(){
  document.getElementById("signup").addEventListener('submit', validateForm);
}

  if (n == "") {
    alert("Hey! You forgot to put in your name!")
    return false;
  }
  else if (e == "") {
    alert("Hey! You forgot to put in your email!")
    return false;
  }
  else if (a == "") {
    alert("Hey! You forgot to put in your address!")
    return false;
  }
  else if (z == "") {
    alert("Hey! You forgot to put in your Zip code!")
    return false;
  }
  else if (p == "") {
    alert("Hey! You forgot to put in your phone number!")
    return false;
  }
  else if (b == "") {
    alert("Hey! You forgot to put in your birthday!")
    return false;
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
