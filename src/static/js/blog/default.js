var postNumber = 1;

$('#newPost').click(function () {
  onClickNewPost();
  console.log(postNumber);
})

function onClickNewPost() {
  if (postNumber%2 == 0) {
    var $newPost = $( '<div class="page-header"><h1>My test blog entry' + ' Nr: ' + postNumber + '<small></small></h1></div><p>This layout should just do it.</p>"');
      $('#even').append($newPost);
  }
  else {
    var $newPost = $( '<div class="page-header"><h1>My test blog entry' + ' Nr: ' + postNumber + '<small></small></h1></div><p>This layout should just do it.</p>"');
      $('#odd').append($newPost);
  }

  postNumber++;
}
