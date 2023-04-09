<?php
add_action('init', 'ms_enqueue_scripts_geral');
add_action('after_setup_theme', 'ms_enqueue_scripts_front');
add_action('after_setup_theme', 'ms_enqueue_scripts_back');
// Scripts e CSS

function ms_enqueue_scripts_front() {
    if ( ! is_admin() ) {
        wp_enqueue_style( 'app_css', get_stylesheet_directory_uri() . '/static/css/main.24258435.css', array(), '1.0' );
    }
}
function ms_enqueue_scripts_geral() {
    wp_enqueue_script('logger_js', get_stylesheet_directory_uri() . '/assets/js/logger.js', array(), '1.0', true);
    wp_enqueue_script('app_js', get_stylesheet_directory_uri() . '/static/js/main.3778d6c7.js', array(), '1.0', true);
}
function ms_enqueue_scripts_back() {
    if ( is_admin() ) {
        # Silence is golden
    }
}


