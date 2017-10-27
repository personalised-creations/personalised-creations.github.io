function flash() {
    var construction = document.getElementById('construction');
    construction.style.color = (construction.style.color=='black') ? 'orange':'black';
      var email = document.getElementById('email');
    email.style.color = (email.style.color=='black') ? 'red':'black';
      var phone = document.getElementById('phone');
    phone.style.color = (phone.style.color=='black') ? 'red':'black';
}
var clr = setInterval(flash, 1000);