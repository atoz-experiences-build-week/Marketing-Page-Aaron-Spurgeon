

  // STICKY NAVBAR USING VANILLA JAVASCRIPT

  const nav = document.querySelector('.nav-bar');
  const topOfNav = nav.offsetTop; //40

  function fixNav () {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight;
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
    }
  }

  window.addEventListener('scroll', fixNav);
