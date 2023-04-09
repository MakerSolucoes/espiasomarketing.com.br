<?php

add_action('after_setup_theme', 'acf_theme_init');

// Adiciona suporte do ACF para Opções do Tema
function acf_theme_init() {
    if (function_exists('acf_add_options_page')) {
        acf_add_options_page(array(
            'page_title' => 'Opções do Tema',
      'menu_title' => 'Opções do Tema',
      'menu_slug' => 'opcoes-do-tema',
      'capability' => 'edit_posts',
      'redirect' => false,
      'order-menu' => 1,
    ));
}
}
