import ServiceUtil from "./services.util";
export default class Pokeapi {
    url = 'https://pokeapi.co/api/v2/';
    getPokemonList(page) {
        var offset = ServiceUtil.getOffsetByPage(page);
        return fetch(this.url + 'pokemon/?offset=' + offset + '&limit=20').then(r => r.json());
    }
    getPokemonById(url) {
        return fetch(url).then(response => {
            return response.json();
        }).then(data => {
            data.imageAsset = ServiceUtil.getPokemonImageAsset(data.id);
            return data;
        });
    }
}