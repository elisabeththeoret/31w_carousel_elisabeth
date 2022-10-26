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

function genere_html(){
	/////////////////////////////////////// HTML
	// Le conteneur d'une boîte
	$contenu = 
	"<div class='boite'>"
	. "<code>Auteur: " . get_the_author() . "</code>"
	. "<date>Date de publication: " . get_the_date() . "</date>"
	. "<code>Adresse URL: " . get_the_guid() . "</code>"
	. '</div> <!-- fin class="boite" -->';

	return $contenu;
}
add_shortcode('31w_carousel_elisabeth', 'genere_html');
