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


// filemtime(); // retourne en milliseconde le temps de la dernière sauvegarde
// plugin_dir_path(); // retourne le chemin du répertoire du plugin
// __FILE__; // le fichier en train de s'exécuter
// wp_enqueue_style(); // Intègre le link:css dans la page
// wp_enqueue_script(); // intègre le script dans la page
// wp_enqueue_scripts(); // le hook

function et_enqueue(){}
$version_css = '';
$version_js = '';

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
add_shortcode( '31w_et_carousel', 'boite_carousel' );
