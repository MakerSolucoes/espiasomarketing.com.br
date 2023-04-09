<?php 

add_action( 'rest_api_init', function() {
    register_rest_route( 'espia/v1', '/configs', array(
        'methods' => 'GET',
        'callback' => 'get_site_configs',
    ) );
} );

function get_site_configs() {
    $data = array('logo' => get_field( 'logo_principal', 'options' ));
    return $data;
}

