/*$("#submit").on("click", function(e){
    e.preventDefault();
    console.log('it works');
    let tmpPass = md5($('#password'));
    let tmpPassConf = md5($('#passwordConfirm'));
    console.log('pass: ' + tmpPass);
    console.log('passConf: ' + tmpPassConf);
    $('#password').val(tmpPass);
    $('#passwordConfirm').val(tmpPassConf);
    if (tmpPass == tmpPassConf) {
      console.log('should submit');
      $('#registerForm').attr('action', "/api/register").submit();
    }
});
*/

function test() {
  let tmpPass = md5($('#password'));
  let tmpPassConf = md5($('#passwordConfirm'));
  console.log('pass: ' + tmpPass);
  console.log('passConf: ' + tmpPassConf);
  $('#password').val(tmpPass);
  $('#passwordConfirm').val(tmpPassConf);
}
