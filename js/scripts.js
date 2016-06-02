/*Owl-carousel*/
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  	loop: true,
  	nav: true,
  	navText: [],
  	autoplay: true,
  	loadedClass: 'owl-loaded row',
  	navContainerClass: 'owl-nav col-md-12',
  	dots: false,
  	autoplaySpeed: 2000,
    autoplayTimeout: 4000,
    navSpeed: 2000,
  	autoplayHoverPause: true,
  	responsive: {
  		0: {
  			items: 1,
        nav: false
  		},
  		640: {
  			items: 2,
        nav: false
  		},
  		991: {
  			items: 3,
        nav: true
  		}
  	}
  });
});
/*Text slicing in description*/
for ( var i = 0; i < $('.education-training-description').length; i++) {
  var array = [];
  array[i] = $('.education-training-description').eq(i).text();
  $('.education-training-description').eq(i).text(array[i].slice(0 , 170) + '...');
};
/*Swipebox*/
;( function( $ ) {
  $( '.swipebox' ).swipebox();
} )( jQuery );
