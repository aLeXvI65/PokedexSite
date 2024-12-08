<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?></title>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" rel="stylesheet">

    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>        
    <?php if (is_page('pokedex')) : ?>
        <header>
            <div class="pokedexHeader">
                <div class="searchContainer">
                    <div class="search-bar">
                        <span>Name or Number</span>
                        <div class="search-bar-container">
                            <!-- <form role="search" method="get" action="<?php echo esc_url(home_url('/')); ?>"> -->
                                <input id="searchPokemonInput" type="search" class="search-field" placeholder="Search..." onchange="searchPokemon()" />
                                <button id="searchPokemonButton" type="button" class="search-submit" onclick="searchPokemon()">
                                <i class="fas fa-search"></i>
                                </button>
                            <!-- </form> -->
                        </div>
                        <span class="searchSpanSmall">Use the Advanced Search to explore Pokémon by type, weakness, Ability, and more!</span>
                    </div>
                </div>

                <div class="secondColumn">
                    <div class="searchTextContainer">
                        Search for a Pokémon by name or using its National Pokédex number.
                    </div>
                </div>
            </div>
        </header>
    <?php elseif (is_page('pokemon-info')) : ?>
        <header>
            <div class="pokemonInfoHeader">
                <div class="infoColumn infoColumnLeft">
                    <div class="infoHeaderDataContainer infoDataLeft">
                        <button class="selectPokemonButton">
                            <i class="fas fa-arrow-circle-left"></i>
                        </button>
                        <span class="pokemonHeaderNumber">#898</span>
                        <span class="pokemonHeaderName">Calyrex</span>
                    </div>
                </div>

                <div class="infoColumn infoColumnRight">
                    <div class="infoHeaderDataContainer infoDataRight">
                        <span class="pokemonHeaderName">Ivyzaur</span>
                        <span class="pokemonHeaderNumber">#002</span>
                        <button class="selectPokemonButton">
                            <i class="fas fa-arrow-circle-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    <?php else : ?>
        <header><h1>Default Header</h1></header>
    <?php endif; ?>

    
