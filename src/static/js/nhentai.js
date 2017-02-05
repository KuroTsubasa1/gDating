function toggleFulscreen() {
  screenfull.toggle();
}

function createPDF() {
}

function getMangaNumber() {
  var mangaNumber = $(".con1-item3").val();
  return mangaNumber;
}

function getNumberOfPages() {
  var mangaNumber = getMangaNumber();

    $("#pagesStartHere")
        .hide()
        .append($('<iframe></iframe>')
            .attr("src", "https://nhentai.net/g/" + mangaNumber + "/")
        )
    ;
  var pageNumber = $('.thumb-container').length;
  return pageNumber;
}

function generatePage() {

  var mangaNumber = getMangaNumber();

  console.log(mangaNumber);
  /*
    Reference link
    https://i.nhentai.net/galleries/973711/1.jpg
  */

  var imgSource = "https://i.nhentai.net/galleries/" + mangaNumber + "/";

  for (var i = 0; i < 400; i++) {

    imgSource = "https://i.nhentai.net/galleries/" + mangaNumber + "/";
    imgSource = imgSource + i + ".jpg"
    console.log(imgSource);

          $("#pagesStartHere")
              .append($('<img/>')
                  .attr("src", imgSource)
                  .addClass("con2-item2")
                  .addClass("center-horizontal")
              )
          ;

          $("#pagesStartHere")
              .append($('<br>'))
          ;

      imgSource = "https://i.nhentai.net/galleries/" + mangaNumber + "/";
      imgSource = imgSource + i + ".png"
      console.log(imgSource);
          $("#pagesStartHere")
              .append($('<img/>')
                  .attr("src", imgSource)
                  .addClass("con2-item2")
                  .addClass("center-horizontal")
              )
          ;

          $("#pagesStartHere")
              .append($('<br>'))

  }
}
