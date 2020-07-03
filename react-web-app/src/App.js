import React from 'react';
import MovieCard from './components/MovieCard';
import { useQuery } from '@apollo/react-hooks';
import { MOVIES_QUERY } from './graphql/query';
import './App.css';

const App = () => {
    const { loading, error, data } = useQuery(MOVIES_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const movies = data.getMovies;

    return (
        <div className="app">
            <header className="app-header">
                <h1>Heroes movies</h1>
            </header>
            <div className="list">
                {movies.map((movie, index) => (
                    <MovieCard key={index} {...movie} />
                ))}
            </div>
        </div>
    );
};

export default App;
