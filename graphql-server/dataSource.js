const { RESTDataSource } = require('apollo-datasource-rest');

class RestAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3030/';
    }

    async getMissions() {
        return this.get('missions');
    }

    async getVillain(id) {
        return this.get(`villains/${id}`);
    }

    async getHero(id) {
        return this.get(`heroes/${id}`);
    }
}

module.exports = RestAPI;
