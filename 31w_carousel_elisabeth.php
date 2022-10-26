<?php
/**
 * 
 * @package 31w Carousel Elisabeth
 * @author Elisabeth Theoret
 * @copyright Collège Maisonneuve
 * @license GLP-2.0-or-later
 * @version 1.0.0
*/
/*
Plugin Name: 31w Carousel Elisabeth
Description: Une extension simple qui permet d'afficher une boîte modale de l'image sélectionnée d'une galerie, pour ensuite accéder à toutes les images de la galerie.
Author: Elisabeth Theoret
Author URI: https://github.com/elisabeththeoret/31w_carousel_elisabeth
Version: 1.0.0
*/

function boite_carousel(){
	/////////////////////////////////////// HTML
	// Le conteneur d'une boîte de carousel
	$contenu = 
	  '<div class="carousel">'
	.	'<button class="carousel__bouton--fermer">X</button>'
	.	'<figure class="carousel__figure"></figure>'
	.	'<form class="carousel__form"></form>'
	. '</div> <!-- fin class="carousel" -->';

	return $contenu;
}
add_shortcode( '31w_carousel_elisabeth', 'boite_carousel' );
