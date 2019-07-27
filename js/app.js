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
  
  glide.mount()
