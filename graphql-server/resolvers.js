// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        missions: (_source, _args, { dataSources }) =>
            dataSources.restAPI.getMissions(),
    },
    Mission: {
        villain: (parent, _args, { dataSources }) => {
            return dataSources.restAPI.getVillain(parent.villain_id);
        },
        heroes: (parent, _args, { dataSources }) => {
            return parent.heroes_ids.map((heroId) =>
                dataSources.restAPI.getHero(heroId)
            );
        },
    },
};

module.exports = resolvers;
