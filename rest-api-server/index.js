'use strict';

const Hapi = require('@hapi/hapi');

const villainsData = [
    {
        id: 1,
        name: 'Loki',
        photo:
            'https://a9c22acaee44c3022afd-09904985198ceb8a8dc81ac3bda18303.ssl.cf3.rackcdn.com/p/30986-195933-large.jpg',
    },
    {
        id: 2,
        name: 'Thanos',
        photo:
            'https://i1.sndcdn.com/artworks-000342268284-w1hvch-t500x500.jpg',
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
];

const missionsData = [
    {
        id: 1,
        name: 'Star war',
        villain_id: 1,
        heroes_ids: [1],
    },
    {
        id: 2,
        name: 'Infinit war',
        villain_id: 2,
        heroes_ids: [1, 2],
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
        path: '/missions',
        handler: (request, h) => {
            return missionsData;
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
