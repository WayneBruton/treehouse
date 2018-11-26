$(function () {


 


  let thanks = setInterval(function () {
    $('#firstShape').shape('flip left');
  }, 3000)

  $('#firstShape').mouseenter(function () {
    clearInterval(thanks);
  });

  $('#firstShape').mouseleave(function () {
    thanks = setInterval(function () {
      $('#firstShape').shape('flip left');
    }, 3000);
  });

  $('#firstShape').click(function () {
    $(this).shape('flip right');
  });


  $('#secondShape').mouseenter(function () {
    $(this).shape('flip left');
  });

  $('#secondShape').click(function () {
    $(this).shape('flip left');
  });

  $('#thirdShape').mouseenter(function () {
    $(this).shape('flip left');
  });

  $('#thirdShape').click(function () {
    $(this).shape('flip left');
  });
//Go to Section
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });

  



  $('#test').click(function (e) {
    let w = $(window).width();
    if (w < 767) {
      $('#section1Menu,#section2Menu,#section3Menu,#section4Menu,#section5Menu').css('display', 'flex').fadeIn(750);
    }
   
  });



  $('#section1Menu,#section2Menu,#section3Menu,#section4Menu,#section5Menu').click(function (e) {
    if (w < 767) {
      $('#section1Menu,#section2Menu,#section3Menu,#section4Menu,#section5Menu').css('display', 'none').fadeOut(750);
    }

    
  });

  $(window).resize(function () {
    let c = $(window).width();
    if (c < 767) {
      resizeMobile();
      resizeSections();
    } else if (c < 1100) {
      resizeSections();
    }
    else {
      resizeLarger();
    }
  });

  let w = $(window).width();
  if (w < 767) {
    resizeMobile();
    setTimeout(function(){
      resizeSections();
    },750)
    
  }  else if (w < 1100) {
    setTimeout(function(){
      resizeSections();
    },750)
  }
  else {
    resizeLarger()

  }

  function resizeSections() {
    let div1Height = $('#shapesContainer').height() + 150;
    let div2Height = $('.ui.card.about').height() + 100;
    let div3Height = $('#board').height() + 150;
    let div4Height = $('#mailingForm').height() + 350;
    let div5Height = $('#contactForm').height() + 450;




    
    let div2Top = div1Height;
    let div3Top = div1Height + div2Height;
    let div4Top = div1Height + div2Height + div3Height;
    let div5Top = div1Height + div2Height + div3Height + div4Height;

    $('#section1, #section2, #section3, #section4, #section5').css('width', '100%');

    
    $('#section1').css('height', div1Height);
    $('#section2').css('height', div2Height);
    $('#section3').css('height', div3Height);
    $('#section4').css('height', div4Height);
    $('#section5').css('height', div5Height);
    $('#section2').css('top',div2Height);
    $('#section3').css({top: div3Top, left: 0});
    $('#section4').css({top: div4Top, left: 0});
    $('#section5').css({top: div5Top, left: 0}); 
    $('#section1, #section2, #section3, #section4, #section5').css('background-color', 'white');
  }


  function resizeMobile() {
    $('#menuImg').css('display', 'none');
    $('#menuBars').css('display', 'flex');
    $('#menuHeader').css('display', 'none');
    // $('#section3').height($('.ui.three.column.grid').height() + 150 + 'px');
  }

  function resizeLarger() {
    $('#menuImg').css('display', 'flex');
    $('#menuBars').css('display', 'none');
    $('#menuHeader').css('display', 'flex');
  }
  
});