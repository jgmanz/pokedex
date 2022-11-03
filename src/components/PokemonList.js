import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import Pokeapi from "../services/pokeapi";

export const PokemonList = (props) => {
    const api = new Pokeapi();
    const [list, setList] = useState([]);
    useEffect(() => {
        api.getPokemonList(props.page)
            .then((data) => {
                setList(data.results)
            });
    }, [props]);
    return (
        <div>
            <Grid
                container
                spacing={4}
                alignItems="stretch"
                padding={2}>
                {list.map(e => {
                    return (
                        <PokemonCard url={e.url} name={e.name} ></PokemonCard>
                    )
                })}
            </Grid>
        </div>
    );

}
