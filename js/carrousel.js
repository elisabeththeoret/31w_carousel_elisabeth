/**
 * Fonction qui initialise le carrousel
 */
 ( function() {
	console.log( "carrousel" );

	const carrousel = document.querySelector( ".carrousel" );
	const cFigure = document.querySelector( ".carrousel__figure" );
	const cForm = document.querySelector( '.carrousel__form' );
	const cBoutonOuvrir = document.querySelector( ".carrousel__bouton--ouvrir" );
	const cBoutonFermer = document.querySelector( ".carrousel__bouton--fermer" );

	const galerie = document.querySelector( ".galerie" );
	const galerieImages = document.querySelectorAll( ".galerie img" );
	console.log(galerieImages);

	let indexImage = 0;
	let dernierIndex = 0;


	/**
	 * Ouvrir le carrousel
	 */
	cBoutonOuvrir.addEventListener( "click", function() {
		afficherCarrousel();
	} );

	/**
	 * Changer d'image active
	 */
	cForm.addEventListener( "click", changerImageActive.bind( this ) );

	/**
	 * Créer et afficher le carrousel
	 */
	function afficherCarrousel() {
		console.log( "ouvrir carrousel" );

		carrousel.classList.remove( "carrousel--fermer" );
		carrousel.classList.add( "carrousel--ouvrir" );

		for ( const uneImage of galerieImages ) {
			ajouterImages( uneImage );
			ajouterRadios();
			indexImage++;
		}

	}

	/**
	 * Fonction qui ajoute les images de la galerie dans le carrousel
	 * @param { HTML Element } uneImage
	 */
	function ajouterImages( uneImage ) {

		uneImage.dataset.index = indexImage;
		let cImage = document.createElement( "img" );
		cImage.setAttribute( "src", uneImage.getAttribute( "src" ) );
		cImage.classList.add( "carrousel__figure__img" );

		cFigure.appendChild( cImage );

	}

	/**
	 * Fonction qui crée les boutons radios pour chaque image de la galerie du carrousel et les ajoute dans le formulaire de la navigation
	 */
	function ajouterRadios() {

		let cRadio = `
			<div class="carrousel__radio">
				<input type="radio" class="carrousel__form__radio" name="carrousel__form__radio" data-index="${ indexImage }">
				<span class="carrousel__radio__custom"></span>
			</div>
		`;

		cForm.innerHTML += cRadio;

	}

	/**
	 * Changer l'image active dans le carrousel
	 * @param { HTML Element } e // Élément cible du DOM
	 */
	function changerImageActive( e ) {

		let cible = e.target;
		console.log( cible );

		if ( cible.dataset.index ) {
			cFigure.children[ dernierIndex ].classList.remove( 'carrousel__figure__img--active' );
			cFigure.children[ cible.dataset.index ].classList.add( 'carrousel__figure__img--active' );

			dernierIndex = Number( cible.dataset.index );
			console.log( dernierIndex );
		}

	}

	/**
	 * Fermer le carrousel
	 */
	cBoutonFermer.addEventListener( "click", function() {
		console.log( "fermer carrousel" );

		carrousel.classList.remove( "carrousel--ouvrir" );
		carrousel.classList.add( "carrousel--fermer" );

	} );

} )();

