// This function is for helping to retrieve a pokemon img url based on id
function getPokeImg(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

export { getPokeImg };