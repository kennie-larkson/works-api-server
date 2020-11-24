import express from "express";
import {ApolloServer} from "apollo-server-express";
import cors from "cors";


import  typeDefs  from "./graphql/schema";
import resolvers from "./graphql/resolvers";

const app = express();
const port = 5000;


app.use("/graphql", cors(), express.urlencoded({extended: true}));


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});


apolloServer.applyMiddleware({app});

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
    
});