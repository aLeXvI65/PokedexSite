<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'pokedex_db' );

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
define( 'AUTH_KEY',         'AWnKmzfI:ov(Pw,+IOkDP#PPFA_T2f8yc}y#NPEu]RCC7&c)rg:ND<Y!*L7gUT}`' );
define( 'SECURE_AUTH_KEY',  'VD3:1NBGR/PWO, ^ +/+S&T-] nhi)#+/SETW4up{-pdsNZ9@#XT_BsZK,ik8O=o' );
define( 'LOGGED_IN_KEY',    'YZ>yJLs&T1,pxxsajr?d}4X<gTUeF;+WJBO&+FPf$Ri|)Hp}EGev%rzC%])&[8lF' );
define( 'NONCE_KEY',        'h{?zgw681c?&47`z{^|^]0~)FGH(z/:u9#<cMYxkby8/HWi4tzPv[!*a@,k@dq+s' );
define( 'AUTH_SALT',        '-?3zlC!`>0!sHquizL5$jG1jyT/f:94$1O#C+|9L,#+ QI{wRq:Kp^<&9MM?UqyZ' );
define( 'SECURE_AUTH_SALT', 'Pl@$%H#zC9UES^,ww70KJuRI2--8aDEuzXA>e73k[f51F@Af1mg{VJ>``1iL c+Y' );
define( 'LOGGED_IN_SALT',   'YGfYTX){jMr$E#VH}k6)PmME72<-626;-]*s-Y$W!JfO*kRX_RZ-r@?&$76*hSk5' );
define( 'NONCE_SALT',       '5![R3=j#`a*KDGqa?-x9-<`{[SEMYX/V?h#u@vh]wWY{,k,gouwb}&l?$4KmAa`(' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
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
