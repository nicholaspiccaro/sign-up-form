var check = function() {
    if (document.getElementById('password').value != document.getElementById('confirm-password').value) {
      document.getElementById('match-text').innerHTML = "Passwords don't match";
    }else{
        document.getElementById('match-text').innerHTML = "";
    }
}

var up = function() {
    document.getElementById('match-text').innerHTML = 3;
}
