$('#registerForm').on('submit', function(e) {

  let email = $('#email').val();
  let username = $('#username').val();
  let password = $('#password').val();
  let passwordConfirm = $('#passwordConfirm').val();

  let usernameOk = true;
  let passwordOk = true;

  console.log('username ' + username);
  if (username == '') {
    usernameOk = false
    usernameError();
  }

  if (password != passwordConfirm || password == '') {
    passwordOk = false;
    passwordError();
  }

  if (usernameOk == false || passwordOk == false) {
    console.log('preventDefault');
    e.preventDefault();
  }

});

function usernameError() {
  let element = "<div id='alertElement' class='alert alert-danger taskbar-margin-top'>Pick a Username</div>"
    $('#username').addClass('alert-danger');
  $('#username').after(element);
}

function passwordError() {
  let element = "<div id='alertElement' class='alert alert-danger taskbar-margin-top'>Your passwords don't match</div>"
  $('#password').addClass('alert-danger');
  $('#passwordConfirm').addClass('alert-danger');
  $('#passwordConfirm').after(element);
}

$('#passwordConfirm').focus(function(e) {
  $('#password').removeClass('alert-danger');
  $('#passwordConfirm').removeClass('alert-danger');
  $('#username').removeClass('alert-danger');
  $('#alertElement').remove();

})

$('#password').focus(function(e) {
  $('#password').removeClass('alert-danger');
  $('#passwordConfirm').removeClass('alert-danger');
  $('#username').removeClass('alert-danger');
  $('#alertElement').remove();
})

$('#username').focus(function(e) {
  $('#password').removeClass('alert-danger');
  $('#passwordConfirm').removeClass('alert-danger');
  $('#username').removeClass('alert-danger');
  $('#alertElement').remove();
})
