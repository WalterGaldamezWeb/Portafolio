$(document).ready(function(){
	// Scroll Elementos Menu
		var acercaDe = $('#acerca-de').offset().top,
			trabajos = $('#trabajos').offset().top,
			contactos = $('#contactos').offset().top;
	
		$('#btn-acerca-de').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: acercaDe
			}, 500);
		});
	
		$('#btn-trabajos').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: trabajos - -90
			}, 500);
		});
	
		$('#btn-contactos').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: contactos - -90
			}, 500);
		});
	
	});