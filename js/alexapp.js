$(document).on('pageinit', function(event){
  $('div.ui-page').on("swipeleft", function () {
    var nextpage = $(this).next('div[data-role="page"]');
      if (nextpage.length > 0) {
$.mobile.changePage(nextpage, { transition: "slide"}, false , true) 
}
  });

  $('div.ui-page').on("swiperight", function () {
    var prevpage = $(this).prev('div[data-role="page"]');
    if (prevpage.length > 0) {
      $.mobile.changePage(prevpage, { transition: "slide", reverse: true }, true, true);
    }
  });
  $('#like').on("click", function() {
    // var label = document.createElement('label')
    // var check = document.createElement('input')
    // check.type = "checkbox"
    // check.innertext = ' liked game  '
    var line = document.createElement('h5')
    line.innerText= '- liked game'
    $('.ui-controlgroup-controls').append(line)

  })


});