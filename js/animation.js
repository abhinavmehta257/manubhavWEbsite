(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.underline--magical');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0 ) {
          element.classList.add('fade-in-element');
        //   console.log(positionFromTop);
        }else if(positionFromTop < 0){
            element.classList.remove('fade-in-element');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();

  (function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.contect-div');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0 ) {
          element.classList.add('fade-in-element');
        //   console.log(positionFromTop);
        // element.classList.remove('fade-out');
        }else if(positionFromTop < 0){
          // element.classList.add('fade-out');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();