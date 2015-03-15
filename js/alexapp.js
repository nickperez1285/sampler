$(document).('pageinit', function(event){
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

  $('#like').click( function(e) {
    (e).preventDefault();


    var checkbox = $(".ui-checkbox.ui-mini")
    var newcheckbox = checkbox.clone()
    checkbox.append(newcheckbox)


  })


});