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
   //slick
   $(".my_music").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });
  //slidemenu
  function toggleMenu() {
    var slideMenu = document.getElementById("slide-menu");
    slideMenu.classList.toggle("hidden");
  }
  const slideMenu = document.getElementById('slide-menu');
    const closeBtn = document.getElementById('close-btn');

    // 닫기 버튼 클릭 시 메뉴 닫기
    closeBtn.addEventListener('click', function () {
      slideMenu.classList.remove('hidden');
    });