 //slick
 $(".da_music").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });
  //slick
  $(".al_music").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });
  //slidemenu
  function toggleMenu() {
    var slideMenu = document.getElementById("slide-menu");
    slideMenu.classList.toggle("hidden");
  }