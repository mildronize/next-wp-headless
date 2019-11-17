<?php
/**
 * Register main menu.
 *
 * @package wp-headless
 */

/**
 * Register navigation menu.
 *
 * @return void
 */
function register_menus() {
    register_nav_menu( 'header-menu', __( 'Header Menu', 'wp-headless' ) );
}
add_action( 'after_setup_theme', 'register_menus' );
