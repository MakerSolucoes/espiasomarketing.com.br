<?php
wp_enqueue_script('logger_js', get_stylesheet_directory_uri() . '/assets/js/logger.js', array(), '1.0', true);

if ( ! is_admin() ) {
    wp_enqueue_style( 'app_css', get_stylesheet_directory_uri() . '/static/css/main.24258435.css', array(), '1.0' );
}

wp_enqueue_script('app_js', get_stylesheet_directory_uri() . '/static/js/main.3778d6c7.js', array(), '1.0', true);


