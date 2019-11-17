<?php
/**
 * Theme Functions
 *
 * @package wp-headless
 */

// Frontend origin.
require_once 'inc/frontend-origin.php';

//  headers.
require_once 'inc/headers.php';

// Logging functions.
require_once 'inc/log.php';

// CORS handling.
require_once 'inc/cors.php';

// Admin modifications.
require_once 'inc/admin.php';

// Register customer post type.
require_once 'inc/post-type.php';

// Add Menus.
require_once 'inc/menu.php';
