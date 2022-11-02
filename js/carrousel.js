/**
 * Fonction qui initialise le carrousel
 */
function Initialisation() {
	console.log( "carrousel" );

	const carrousel = document.querySelector( ".carrousel" );
	const cFigure = document.querySelector( ".carrousel__figure" );
	const cBoutonOuvrir = document.querySelector( ".carrousel__bouton--ouvrir" );
	const cBoutonFermer = document.querySelector( ".carrousel__bouton--fermer" );

	const galerie = document.querySelector( ".galerie" );
	const galerieImages = document.querySelectorAll( ".galerie img" );

	let index = 0;

	/**
	 * Ouvrir le carrousel
	 */
	cBoutonOuvrir.addEventListener( "click", function() {
		console.log( "ouvrir carrousel" );

		ajouterImages();

		carrousel.classList.remove( "carrousel--fermer" );
		carrousel.classList.add( "carrousel--ouvrir" );
	} );

	/**
	 * Fermer le carrousel
	 */
	cBoutonFermer.addEventListener( "click", function() {
		console.log( "fermer carrousel" );

		carrousel.classList.remove( "carrousel--ouvrir" );
		carrousel.classList.add( "carrousel--fermer" );
	} );

	/**
	 * Fonction qui ajoute les images de la galerie dans le carrousel
	 */
	function ajouterImages() {
		let i = 0;

		for ( const uneImage of galerieImages ) {
			i++;

			let cImage = document.createElement( "img" );
			cImage.setAttribute( "src", uneImage.getAttribute( "src" ) );
			cImage.classList.add( "carrousel__figure__img" );
			cImage.dataset.index = i;

			cFigure.appendChild( cImage );
		}

		carrousel.appendChild( cFigure );
	}

}

/**
 * Écouteur d'événement au chargement de la fenêtre
 */
window.addEventListener( "load", Initialisation );
