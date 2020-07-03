import React from 'react';
import ListItem from './ListItem';

const MovieCard = ({ name, link, villain, heroes }) => (
    <div className="movie" onClick={() => window.open(link, '_blank')}>
        <h2 className="title">{name}</h2>
        <div className="label">Villain:</div>
        <ListItem name={villain.name} photo={villain.photo} />

        <div className="label">Heroes who saved the day:</div>
        {heroes.map((hero, index) => (
            <ListItem key={index} name={hero.name} photo={hero.photo} />
        ))}
    </div>
);

export default MovieCard;
