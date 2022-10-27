<?php
/**
 * 
 * @package 31w ET Carousel
 * @author Elisabeth Theoret
 * @copyright Collège Maisonneuve
 * @license GLP-2.0-or-later
 * @version 1.0.0
*/
/*
Plugin Name: 31w ET Carousel
Description: Une extension simple qui permet d'afficher une boîte modale de l'image sélectionnée d'une galerie, pour ensuite accéder à toutes les images de la galerie.
Author: Elisabeth Theoret
Author URI: https://github.com/elisabeththeoret/31w_et_carousel
Version: 1.0.0
*/

/**
 * Fonction qui intègre les liens (link:css et script) dans la page
 */
function et_enqueue() {
	// Intégrer le fichier CSS
	$version_css = filemtime( plugin_dir_path( __FILE__ ) . "style.css" );
	wp_enqueue_style(
		'31w_et_carousel',
		plugin_dir_url( __FILE__ ) . "style.css",
		array(),
		$version_css,
		false
	);

	// Intégrer le script JS
	$version_js = filemtime( plugin_dir_path( __FILE__ ) . "js/carousel.js" );
	wp_enqueue_script(
		'31w_et_carousel',
		plugin_dir_url( __FILE__ ) . "js/carousel.js",
		array(),
		$version_js,
		false
	);
}
add_action( 'wp_enqueue_scripts', 'et_enqueue' );

/**
 * Fonction qui intègre le contenu du carousel dans la page
 */
function boite_carousel() {
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
add_shortcode( '31w_et_carousel', 'boite_carousel' );
