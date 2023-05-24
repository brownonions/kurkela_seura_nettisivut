<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */
define('FS_METHOD','direct');
// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'vn(y(hSqdI0C,1JB<*M(%8&u&:g OQo^(C5*q;skk1,3Kdpwon+L{k(,2EpmB8UQ' );
define( 'SECURE_AUTH_KEY',  '/!0 ;!sTHM-W0X4Wv6$lbGc;TTfk+C-B8hg&mVK4mVt4238/a9--&F3^;!cb}NLO' );
define( 'LOGGED_IN_KEY',    'cv#D3|DqX;sMOeK#{FaC&%nhj9`F_J-*ZY%>UWn@ 9n e7[HeKi?>d&c=g~7+na{' );
define( 'NONCE_KEY',        '%L{SgvH&g6W;m/NEZB<F{:l~SEEDhI4~`<!i:Wkj8Z}t?e_pOX~6{s6# #K_d[)V' );
define( 'AUTH_SALT',        'pZ0[n8ulIznzedAcvQ!B#fiw1v34;WiM6#*F|7zaM/RIwr5uIRl<t?jqRh+awq]x' );
define( 'SECURE_AUTH_SALT', 'UwDOP*z7~])AZV2,9[c6~1SFp3k#}(M$V:WVzc_rtp2|Lqxz4||2z;nt;GqusCZS' );
define( 'LOGGED_IN_SALT',   'b~u{&nTV3j)>D?)FrPv_)#Cu/Lu$4mY5CW7@fYRZrkx@Y.94`P}I>%DU; D xSbV' );
define( 'NONCE_SALT',       ':WhGQ8N%w)$j$-kW-^`1$0q,dhCMPeJBSO=:YJFWm,:<FHaQvLKlhftKsqK>auY`' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
