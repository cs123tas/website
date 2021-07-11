window.onpageshow = function(event) {
  if (event.persisted) {
    var elts = document.getElementsByClassName("transform__wrapper"),
    len = elts.length,
    i;

    for(i = 0; i < len; i++) {
      elts[i].classList.remove("transform--left");
    }
  }
};


(function(){
  "use strict";

  function nav() {
    var isOpen = false;
    document.getElementsByClassName("nav__toggle")[0].addEventListener("click", function() {
      var elts = document.getElementsByClassName("transform__wrapper"),
      len = elts.length,
      i;

      isOpen = !isOpen;

      if (isOpen) {
        for(i = 0; i < len; i++) {
          elts[i].classList.add("transform--left");
        }
        return;
      }
      
      for(i = 0; i < len; i++) {
        elts[i].classList.remove("transform--left");
      }
    });
  }

  function scroll() {
    var headers = document.getElementsByClassName("nav"),
    len = headers.length,
    i;

    if (window.scrollY > 20) {
      for (i = 0; i < len; i++) {
        headers[i].classList.add("nav--solid");
      }
      return;
    }

    for (i = 0; i < len; i++) {
      headers[i].classList.remove("nav--solid");
    }
  }

  window.onload = function() {
    nav();
    scroll();
    window.addEventListener("scroll", scroll);
  };
})();
