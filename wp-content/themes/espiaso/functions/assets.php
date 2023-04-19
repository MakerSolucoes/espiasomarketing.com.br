<?php
add_action('init', 'ms_enqueue_scripts_geral');
add_action('wp_enqueue_scripts', 'ms_enqueue_scripts_front');
add_action('wp_enqueue_scripts', 'ms_enqueue_scripts_back');
add_theme_support('menus');
add_theme_support('post-thumbnails');

function ms_enqueue_scripts_front()
{
	if (!is_admin()) {
		$css = glob(get_stylesheet_directory() . '/build/static/css/*', GLOB_BRACE);
		$files = array_merge($css);
		foreach ($files as $file) {
			if (strpos($file, '.css') !== false && !in_array($file, array('txt', 'map'))) {
				$exploded = explode('/shared/httpd/espiasomarketing.com.br/wp-content/themes/espiaso/', $file);
				$path = '/' . $exploded[1];
				$version = filemtime($file);
				wp_enqueue_style('app_css_' . rand(1, 100), get_stylesheet_directory_uri() . $path, array(), $version);
			}
		}
		$js = glob(get_stylesheet_directory() . '/build/static/js/*', GLOB_BRACE);
		$files = array_merge($js);
		foreach ($files as $file) {
			$ext = pathinfo($file, PATHINFO_EXTENSION);
			if ($ext === 'js' && !in_array($ext, array('txt', 'map'))) {
				$exploded = explode('/shared/httpd/espiasomarketing.com.br/wp-content/themes/espiaso/', $file);
				$path = '/' . $exploded[1];
				$version = filemtime($file);
				wp_enqueue_script('app_js' . rand(1, 100), get_stylesheet_directory_uri() . $path, array(), $version, true);
			}
		}
		wp_enqueue_script('logger_js', get_stylesheet_directory_uri() . '/assets/js/logger.js', array(), '1.0', true);
	}
}
function ms_enqueue_scripts_geral()
{
}
function ms_enqueue_scripts_back()
{
	if (is_admin()) {
		# Silence is golden
	}
}
