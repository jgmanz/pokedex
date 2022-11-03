import ServiceUtil from "./services.util";


describe("Get page offset page ", () => {
    test("it should the offset according the parameter 0", () => {
        expect(ServiceUtil.getOffsetByPage(0)).toEqual(20);
    });
    test("it should the offset according the parameter 1", () => {
        expect(ServiceUtil.getOffsetByPage(1)).toEqual(20);
    });
    test("it should the offset according the parameter 2", () => {
        expect(ServiceUtil.getOffsetByPage(2)).toEqual(40);
    });
    test("it should the offset according the parameter 5", () => {
        expect(ServiceUtil.getOffsetByPage(5)).toEqual(100);
    });
    test("it should the offset according the parameter 3", () => {
        expect(ServiceUtil.getOffsetByPage("3")).toEqual(60);
    });
    test("it should the offset according the parameter f", () => {
        expect(ServiceUtil.getOffsetByPage("f")).toEqual(NaN);
    });


    describe("Get image src ", () => {
        test("it should image according the parameter 2", () => {
            expect(ServiceUtil.getPokemonImageAsset(2))
            .toEqual("https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png");
        });
    
        test("it should image according the parameter 123", () => {
            expect(ServiceUtil.getPokemonImageAsset('123'))
            .toEqual("https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png");
        });
    
    });
});