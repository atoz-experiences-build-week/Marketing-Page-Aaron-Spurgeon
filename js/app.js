var glide = new Glide('.glide', {
    type: 'carousel',
    perView: 5,
    focusAt: 'center',
    breakpoints: {
      1200: {
          perView: 3
      },
      800: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  })
  
  glide.mount();

  // STICKY NAVBAR USING VANILLA JAVASCRIPT

  const nav = document.querySelector('.nav-bar');
  const topOfNav = nav.offsetTop; //40

  function fixNav () {
    if (window.scrollY >= topOfNav) {
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
    }
  }

  window.addEventListener('scroll', fixNav);
