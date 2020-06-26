import React from 'react';
import Mission from './components/Mission';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { MISSIONS_QUERY } from './graphql/query';
import './App.css';

const App = () => {
    const { loading, error, data } = useQuery(MISSIONS_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div className="app">
            <header className="app-header">
                <h1>Missions</h1>
            </header>
            <div className="list">
                {data.missions.map((mission, index) => (
                    <Mission key={index} {...mission} />
                ))}
            </div>
        </div>
    );
};

export default App;
