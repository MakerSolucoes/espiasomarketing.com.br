<?php 

add_action( 'rest_api_init', function() {
    register_rest_route( 'espia/v1', '/configs', array(
        'methods' => 'GET',
        'callback' => 'get_site_configs',
    ) );
    register_rest_route( 'espia/v1', '/time', array(
        'methods' => 'GET',
        'callback' => 'get_time',
    ) );
    register_rest_route( 'espia/v1', '/portfolio', array(
        'methods' => 'GET',
        'callback' => 'get_portfolio',
    ) );
} );

function get_site_configs() {

    // Logo principal
    $data = array('logo' => get_field( 'logo_principal', 'options' ));

    // Header
    $menu_items = wp_get_nav_menu_items( 'header' );

    $menus = array();

    foreach ( $menu_items as $menu_item ) {
        $item_data = array(
            'title' => $menu_item->title,
            'url' => $menu_item->url,
            'target' => $menu_item->target,
        );

        $menus[] = $item_data;
    }
    
    
    // Main Section
    $main_confgs = array();
    $main_confgs['titulo'] = get_field('main_titulo', 'options');
    $main_confgs['link_orcamento'] = get_field('link_orcamento', 'options');
    $main_confgs['descricao'] = get_field('descricao', 'options');
    $main_confgs['siga'] = get_field('siga', 'options');

    // Curiosidades
    $curiosidades_configs = array();
    $curiosidades_configs['titulo'] = get_field('curiosidades_titulo', 'options');
    $curiosidades_configs['descricao'] = get_field('curiosidades_descricao', 'options');
    $curiosidades_configs['loop'] = get_field('curiosidades_loop', 'options');

    // Serviços
    $servicos_configs = array();
    $servicos_configs['header'] = get_field('servicos_header', 'options');
    $servicos_configs['titulo'] = get_field('servicos_titulo', 'options');
    $servicos_configs['link'] = get_field('servicos_link', 'options');
    $servicos_configs['loop'] = get_field('servicos_loop', 'options');


    // Video
    $video_configs = array();
    $video_configs['descricao'] = get_field('video_descricao', 'options');
    $video_configs['link'] = get_field('video_link', 'options');
    $video_configs['background'] = get_field('video_background', 'options');

    // Depoimentos
    $depoimentos_configs = array();
    $depoimentos_configs['loop'] = get_field('depoimentos', 'options');

    // Parceiros
    $parceiros_configs = array();
    $parceiros_configs['titulo'] = get_field('parceiros_titulo', 'options');
    $parceiros_configs['loop'] = get_field('parceiros', 'options');

    // Agendamento
    $agendamento_configs = array();
    $agendamento_configs['titulo'] = get_field('agendamento_titulo', 'options');
    $agendamento_configs['background'] = get_field('agendamento_background', 'options');
    $agendamento_configs['botao'] = get_field('agendamento_botao', 'options');

    // Social
    $social_configs = array();
    $social_configs['redes_sociais'] = get_field('redes_sociais', 'options');

    // Contato
    $contato_configs = array();
    $contato_configs['contato'] = get_field('contato', 'options');

    $data = array_merge(
        $data,
        array('header_navigation' => $menus),
        array('main_configs' => $main_confgs),
        array('curiosidades_configs' => $curiosidades_configs),
        array('servicos_configs' => $servicos_configs),
        array('video_configs' => $video_configs),
        array('depoimentos_configs' => $depoimentos_configs),
        array('parceiros_configs' => $parceiros_configs),
        array('agendamento_configs' => $agendamento_configs),
        array('social_configs' => $social_configs),
        array('contato_configs' => $contato_configs),
        
    );
    return $data;
}


function get_time() {
    $args = array(
        'post_type' => 'time',
        'posts_per_page' => -1,
        'orderby' => 'menu_order',
        'order' => 'ASC',
    );

    $query = new WP_Query( $args );

    $data = array();

    if ( $query->have_posts() ) {
        while ( $query->have_posts() ) {
            $query->the_post();

            $item_data = array(
                'id' => get_the_ID(),
                'title' => get_the_title(),
                'content' => get_the_content(),
                'thumbnail' => get_the_post_thumbnail_url(),
                'social' => get_field( 'social_media' ),
            );

            $data[] = $item_data;
        }
    }
    return $data;
}

function get_portfolio(){
    $args = array(
        'post_type' => 'portfolio',
        'posts_per_page' => -1,
        'orderby' => 'menu_order',
        'order' => 'ASC',
    );

    $query = new WP_Query( $args );
    $data = array();

    if ( $query->have_posts() ) {
        while ( $query->have_posts() ) {
            $query->the_post();

            $item_data = array(
                'id' => get_the_ID(),
                'title' => get_the_title(),
                'content' => get_the_content(),
                'thumbnail' => get_the_post_thumbnail_url(),
                'categoria' => get_the_category(),
            );

            $data[] = $item_data;
        }
    }
    return $data;
}
