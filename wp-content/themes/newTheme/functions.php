<?php
function personal_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'personal_theme_setup');

function personal_theme_scripts() {
    // Register styles.
    wp_enqueue_style('main-style', get_stylesheet_uri());

    // Register and load scripts.
    wp_enqueue_script('main-js', get_template_directory_uri() . '/main.js', [], null, true);
}
add_action('wp_enqueue_scripts', 'personal_theme_scripts');

function load_info_script() {
    // check if we are in pokemon info page
    if (is_page('pokemon-info')) {
        wp_enqueue_script(
            'pokemon-info-script', // Handle of script
            get_template_directory_uri() . '/js/info.js',
            array('jquery'), 
            null, 
            true 
        );
    }
}
add_action('wp_enqueue_scripts', 'load_info_script');

function load_info_css() {
    if (is_page('pokemon-info')) {
        wp_enqueue_style(
            'pokemon-info-css',
            get_template_directory_uri() . '/css/pokemonInfo.css', 
            array(), 
            null 
        );
    }
}
add_action('wp_enqueue_scripts', 'load_info_css');
?>
