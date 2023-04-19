<?php

add_action('init', 'criar_cpt_time');
add_action( 'init', 'criar_cpt_portfolio' );

function criar_cpt_time()
{

	$labels = array(
		'name' => 'Time',
		'singular_name' => 'Time',
		'menu_name' => 'Time',
		'add_new' => 'Adicionar novo',
		'add_new_item' => 'Adicionar novo time',
		'edit_item' => 'Editar time',
		'new_item' => 'Novo time',
		'view_item' => 'Ver time',
		'search_items' => 'Buscar times',
		
		'not_found' => 'Ninguem do time encontrado',
		'not_found_in_trash' => 'Nenhum membro do time encontrado na lixeira',
	);

	$args = array(
		'labels' => $labels,
		'public' => true,
		'has_archive' => true,
		'menu_icon' => 'dashicons-groups',
		'supports' => array('title', 'editor', 'thumbnail', 'resume'),
	);

	register_post_type('time', $args);
}
function criar_cpt_portfolio() {
	$labels = array(
	  'name' => 'Portfólio',
	  'singular_name' => 'Portfólio',
	  'menu_name' => 'Portfólio',
	  'add_new' => 'Adicionar novo',
	  'add_new_item' => 'Adicionar novo item ao portfólio',
	  'edit_item' => 'Editar item do portfólio',
	  'new_item' => 'Novo item do portfólio',
	  'view_item' => 'Ver item do portfólio',
	  'search_items' => 'Buscar itens do portfólio',
	  'not_found' => 'Nenhum item do portfólio encontrado',
	  'not_found_in_trash' => 'Nenhum item do portfólio encontrado na lixeira',
	);
  
	$args = array(
	  'labels' => $labels,
	  'public' => true,
	  'has_archive' => true,
	  'menu_icon' => 'dashicons-portfolio',
	  'supports' => array( 'title', 'editor', 'thumbnail' ),
	  'taxonomies' => array( 'category' ),
	);
  
	register_post_type( 'portfolio', $args );
  }

