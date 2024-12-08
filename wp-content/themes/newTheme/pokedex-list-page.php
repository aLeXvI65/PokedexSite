<?php
/*
Template Name: Custom Header Page
*/
get_header('pokedex-list'); // Llama a un encabezado específico como header-custom.php
?>

<main>
    <h1><?php the_title(); ?></h1>
    <p>This is the content of the page with a custom header.</p>
    <?php
    // while (have_posts()) : the_post();
    //     the_content();
    // endwhile;
    ?>
</main>

<?php get_footer(); ?>
