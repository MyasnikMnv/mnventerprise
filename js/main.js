  $(function() {
      // Smooth Scrolling
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });


// Animationen
		window.sr =ScrollReveal();
	
		sr.reveal('.app-links', {
				duration: 2000,
				origin:'top',
				distance:'300px'
		});
		sr.reveal('.app-rechts', {
				duration: 2000,
				origin:'right',
				distance:'300px'
		});
		sr.reveal('#home div', {
				duration: 2000,
				origin:'bottom',
				distance: '200px'
		});
