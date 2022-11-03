export default class ServiceUtil {
    static getOffsetByPage(page) {
        console.log((20 * (+page - 1)) + 20);
        return (20 * (+page - 1)) + 20;
    }

    static getPokemonImageAsset(id) {
        const pokemonId = String(+id).padStart(3, '0');
        return 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + pokemonId + '.png'
    }
}