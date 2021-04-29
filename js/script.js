//Hero Slider
$('.home .hero').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    dots: true
});

//Burger menu
// Controls the slide in/out functionality of the menu
var mobileNav = $('.mob-nav-list'); // CSS Class of Nav Menu
var navToggle = $('.nav-toggle'); // CSS Class of Toggle Button
var overlay = $('.overlay');
var isOpen = 0; // Is the menu open or closed?
var menuWidth = $('.mob-nav-list').css('width');
var menuWidthInverse = "-" + menuWidth;

$($('.nav-toggle, .overlay')).click(function(){
  if ( isOpen == 0 ) {
    $('.overlay').fadeIn();
    $(mobileNav).animate({'left' : '0px'}, 300);
    $(navToggle).animate({'left' : '250px'}, 300);
    // $(content).animate({'right' : menuWidthInverse}, 300);
    $(navToggle).removeClass('fa-bars');
    $(navToggle).addClass('fa-times');
    isOpen++;
  } else {
    $('.overlay').fadeOut();
    $(mobileNav).animate({'left' : menuWidthInverse}, 300);
    $(navToggle).animate({'left' : '0px'}, 300);
    // $(content).animate({'right' : 0}, 300);
    $(navToggle).removeClass('fa-times');
    $(navToggle).addClass('fa-bars');
    isOpen--;
  }
});

//Product Tabs
// Show the first tab and hide the rest
$('.product-tab ul li:first-child').addClass('active');
$('.product-tab-content').hide();
$('.product-tab-content:first').show();

// Click function
$('.product-tab ul li').click(function(){
  $('.product-tab ul li').removeClass('active');
  $(this).addClass('active');
  $('.product-tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

//Articles Carousel
$('.articles .articles-wrap').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  autoplay: false,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [                           
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      }
    }
]
});

//Form submission
$("#contact-us-form").submit(function(event){
  event.preventDefault();
  submitForm();
});

function checkNameEmpty(inputID) {  
  $(inputID).blur(function(){
    if($(this).val() != '') {
      $(this).closest('.input-block').addClass('error');
    }else{
        $(this).closest('.input-block').removeClass('error');
    } 
  });
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function checkValidEmail(emailInputID) {
  $(emailInputID).blur(function(){
    var email = $(emailInputID).val();
    if (validateEmail(email)){
        $(this).closest('.input-block').addClass('error');
    }else if(email == ""){
        $(this).closest('.input-block').removeClass('error');
    } else {
        $(this).closest('.input-block').addClass('error');
    }
  });
}

function checkRadioBox(radioBoxID){
  $(radioBoxID).click(function(){
    $(this).closest('.input-block').removeClass('error');
  });
}

$('.form-control').focus(function() {
  $(this).parent('.input-block').addClass('error');
});
$('.form-control').focusout(function() {
  if ($(this).val() == '') {
    $(this).parent('.input-block').removeClass('error');
  }
});

function submitForm() {
  var valid = true;
  if($("#name").val() == '')
  {
    $("#name").closest('.input-block').addClass('error');
    valid = false;
  }
  if($("#email").val() == '')
  {
    $("#email").closest('.input-block').addClass('error');
    valid = false;
  }
  if($("#message").val() == '')
  {
    $("#message").closest('.input-block').addClass('error');
    valid = false;
  }
  if($('#agree').prop('checked') == false) {
    $('#agree').closest('.input-block').addClass('error');
    valid = false;
  } else {
    valid = true;
  }

  checkNameEmpty("#name");
  checkValidEmail("#email");
  checkNameEmpty("#messae");
  // checkRadioBox('input[name=agreefield]');

  console.log(valid);

  if(valid == false) {
    return false;
    console.log('false')
  }
  else {
    console.log('Form is submitted successfully!!')
  }
}


//Tabs plugin
// $('.product-wrap').easytabs({
//   animate: true,
//   // animationSpeed: 500,
//     tabActiveClass: "-active",
//     panelActiveClass: "-active",
//     panelContext: $('.product-tabs-content'),
//     defaultTab: "li:first-child",
//     tabs: ".product-tab > ul > li"
// });


$('.product-tab ul > li').on('click', function() {
  if ($(this).hasClass('active')) {
    $(this).parent().toggleClass('-is-open');
  }
});
