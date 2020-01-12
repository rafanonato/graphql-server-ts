import * as express from 'express'
import schema from './graphql/schema';
import graphqlHTTP = require('express-graphql');

class App{

    public express: express.Application;

    constructor(){
        this.express = express();
        this.middleware()
    }

    private middleware(): void {
        this.express.use('/graphql', graphqlHTTP({
            schema: schema,
            graphiql: true
        }))
    }
}

export default new App().express;