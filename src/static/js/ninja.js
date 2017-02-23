var cookies = 0;

function addACookie(cookies) {
  cookies = cookies + 1;
}

function myCookies(cookies) {
  console.log("Your amount of cookies:" + cookies);
}

function ninja() {
  console.log("I'm the ninja.");
  console.log("You did a great job!");
  console.log("Here is your reward.");
  console.log("*You got 1 cookie !*");
  addACookie(cookies);
  myCookies(cookies);
}
