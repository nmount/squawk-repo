const express = require('express');
router.get('/', asyncHandler(async function(_req, res) {
    const pokemon = await PokemonRepository.list();
    return res.json(pokemon);
  }));
