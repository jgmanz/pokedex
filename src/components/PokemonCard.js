import { Avatar, Card, CardHeader, IconButton, CardMedia, CardActions, ExpandMore, CardContent, Typography, capitalize, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import ServiceUtil from '../services/services.util';

import { blue } from '@mui/material/colors';
import Pokeapi from "../services/pokeapi";

export const PokemonCard = (props) => {
  const api = new Pokeapi();
  const [details, setDetatils] = useState({});
  useEffect(() => {
    api.getPokemonById(props.url).then(data=> setDetatils(data))
      .catch(error => console.error(error));
  }, [props]);
  return (
    <Card sx={{ maxWidth: 350, m: 2 }}>
      <CardHeader
        sx={{ background: blue[400] }}
        avatar={
          <Avatar aria-label="recipe"
            sx={{ bgcolor: blue[200], width: 56, height: 56 }}
            src={(details && details.sprites) ? details.sprites.front_default : ""}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }

        titleTypographyProps={{ variant: 'h5', color: '#fff' }}
        title={capitalize(props.name)}
        subheader=""
      />
      <CardMedia
        component="img"
        height="400"
        image={details.imageAsset}
        alt="Paella dish"
      />
      <CardContent>
      <Typography variant="h6" color="text.secondary">
          Habilities
        </Typography>
        {details.abilities ? details.abilities.map(a =>
          <Chip label={a.ability.name} />
        ) : "No data"}
 
<Typography variant="h6" color="text.secondary">
          Type
        </Typography>
        {details.abilities ? details.types.map(t =>
          <Chip label={t.type.name} />
        ) : "No data"}
        
      </CardContent>
    </Card>
  );

}