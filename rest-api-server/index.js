'use strict';

const Hapi = require('@hapi/hapi');

const villainsData = [
    {
        id: 1,
        name: 'Whiplash',
        photo:
            'https://ficquotes.com/images/characters/ivan-vanko-iron-man.jpg',
    },
    {
        id: 2,
        name: 'Thanos',
        photo:
            'https://i1.sndcdn.com/artworks-000342268284-w1hvch-t500x500.jpg',
    },
    {
        id: 3,
        name: 'Killmonger',
        photo:
            'https://pyxis.nymag.com/v1/imgs/7c3/d4d/2120f5b0b6abcda8d86c0a937d376f520b-17-killmonger-movie.rsquare.w1200.jpg',
    },
];

const heroesData = [
    {
        id: 1,
        name: 'Hulk',
        photo: 'https://i1.sndcdn.com/avatars-000083309238-usu5vw-t500x500.jpg',
    },
    {
        id: 2,
        name: 'Doctor Strange',
        photo:
            'https://filmjunk.com/images/weblog/2016/04/doctorstrange-200x200.jpg',
    },
    {
        id: 3,
        name: 'Iron man',
        photo:
            'https://i-cdn.phonearena.com/images/article/46407-image/Iron-Man-not-Robert-Downey-Jr-already-used-by-LG-for-phone-ads.jpg',
    },
    {
        id: 3,
        name: 'Black Panther',
        photo: 'https://avatarfiles.alphacoders.com/205/205401.png',
    },
];

const moviesData = [
    {
        id: 1,
        name: 'Iron Man 2',
        villain_id: 1,
        heroes_ids: [3],
        link: 'https://www.youtube.com/watch?v=BoohRoVA9WQ',
    },
    {
        id: 2,
        name: 'Avangers: Infinit war',
        villain_id: 2,
        heroes_ids: [1, 2, 3],
        link: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
    },
    {
        id: 3,
        name: 'Black Panther',
        villain_id: 3,
        heroes_ids: [3],
        link: 'https://www.youtube.com/watch?v=xjDjIWPwcPU',
    },
];

const init = async () => {
    const server = Hapi.server({
        port: 3030,
        host: 'localhost',
    });

    server.route({
        method: 'GET',
        path: '/heroes/{id}',
        handler: function (request, h) {
            const hero = heroesData.find((e) => e.id === +request.params.id);
            if (!hero) {
                return h.response().code(404);
            }

            return hero;
        },
    });

    server.route({
        method: 'GET',
        path: '/villains/{id}',
        handler: function (request, h) {
            const villain = villainsData.find(
                (e) => e.id === +request.params.id
            );
            if (!villain) {
                return h.response().code(404);
            }

            return villain;
        },
    });

    server.route({
        method: 'GET',
        path: '/movies',
        handler: (request, h) => {
            return moviesData;
        },
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
