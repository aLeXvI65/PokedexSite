<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?></title>
    <?php get_header(); ?>
</head>
<body <?php body_class(); ?>>

    <main>
        <?php
        if (have_posts()) :
            while (have_posts()) : the_post();
                // the_title('<h2>', '</h2>');
                the_content();
            endwhile;
        else :
            echo '<p>No current content.</p>';
        endif;
        ?>
    </main>

    <footer>
        <p>&copy; <?php echo date('Y'); ?> <?php echo "Oscar Alejandro Vitela Ramírez - Pokedex Challenge"; ?></p>
    </footer>
    <?php wp_footer(); ?>
</body>
</html>
