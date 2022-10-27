function Initialisation() {
	console.log( 'carrousel' );

	const boutonOuvrir = document.querySelector( ".carrousel__bouton--ouvrir" );
	boutonOuvrir.addEventListener( 'click', function() {
		console.log( 'ouvrir carrousel' );
	} );
}

window.addEventListener( "load", Initialisation );
