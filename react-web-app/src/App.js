import React from 'react';
import Mission from './components/Mission';
import './App.css';

const missions = [
    {
        name: 'Star wars',
        villain: {
            name: 'Thanos',
            photo:
                'https://i1.sndcdn.com/artworks-000342268284-w1hvch-t500x500.jpg',
        },
        heroes: [
            {
                name: 'Hulk',
                photo:
                    'https://i1.sndcdn.com/avatars-000083309238-usu5vw-t500x500.jpg',
            },
            {
                name: 'Doctor Strange',
                photo:
                    'https://filmjunk.com/images/weblog/2016/04/doctorstrange-200x200.jpg',
            },
        ],
    },
];

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <h1>Missions</h1>
            </header>
            <div className="list">
                {missions.map((mission, index) => (
                    <Mission {...mission} />
                ))}
            </div>
        </div>
    );
}

export default App;
