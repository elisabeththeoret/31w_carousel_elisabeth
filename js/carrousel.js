function Initialisation() {
	console.log( 'carrousel' );

	const boutonOuvrir = document.querySelector( ".carrousel__bouton--ouvrir" );
	const boutonFermer = document.querySelector(".carrousel__bouton--fermer")
	const carrousel = document.querySelector(".carrousel");

	boutonOuvrir.addEventListener( 'click', function() {
		console.log( 'ouvrir carrousel' );
		carrousel.classList.remove( "carrousel--fermer" );
		carrousel.classList.add( "carrousel--ouvrir" );
	} );

	boutonFermer.addEventListener( "click", function() {
		console.log( 'fermer carrousel' );
		carrousel.classList.remove( "carrousel--ouvrir" );
		carrousel.classList.add( "carrousel--fermer" );
	} );
}

window.addEventListener( "load", Initialisation );
