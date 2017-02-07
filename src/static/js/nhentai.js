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

function generatePage(test,pageFormat,pageNumber) {

  var mangaNumber = test;

  console.log(mangaNumber);
  /*
    Reference link
    https://i.nhentai.net/galleries/973711/1.jpg
  */

  var imgSource = "https://i.nhentai.net/galleries/" + mangaNumber + "/";

  for (var i = 1; i < pageNumber; i++) {

    imgSource = "https://i.nhentai.net/galleries/" + mangaNumber + "/";
    imgSource = imgSource + i + "." +pageFormat;
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
      console.log(pageFormat);
  }
}
