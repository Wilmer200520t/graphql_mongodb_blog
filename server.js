import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema.js';
import connectMongoDB from './db/index.js';
import { authentificate }  from './middlewares/auth.js'; './middlewares/auth.js';

const app = express();
connectMongoDB();

app.use(authentificate);

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Server is running on port http://localhost:4000');
});