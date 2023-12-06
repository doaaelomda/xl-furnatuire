function signup() {
    var signing = document.querySelector('.signing');
    var completed = document.querySelector('.completed');
    var signword = document.querySelector('.sign-word');

    if (signing.style.display === 'block') {
        signing.style.display = 'none';
        completed.style.display = 'block';
        signword.textContent = "Sign Up";
    } else {
        signing.style.display = 'block';
        completed.style.display = 'none';
        signword.textContent = "Sign In";
    }
}

function signin() {
    var signing = document.querySelector('.signing');
    var completed = document.querySelector('.completed');
    var signword = document.querySelector('.sign-word');

    if (signing.style.display === 'block') {
        signing.style.display = 'none';
        completed.style.display = 'block';
        signword.textContent = "Sign Up";
    } else {
        signing.style.display = 'block';
        completed.style.display = 'none';
        signword.textContent = "Sign In";
    }
}

$("button").click(function () {





    $(".check-icon").hide();
    setTimeout(function () {
      $(".check-icon").show();
    }, 10);
  });

 