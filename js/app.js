var glide = new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    breakpoints: {
      1200: {
          perView: 2
      },
      800: {
        perView: 1
      },
      480: {
        perView: 1
      }
    }
  })
  
  glide.mount()
