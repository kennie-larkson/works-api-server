require('dotenv').config();
import express from "express";
import {ApolloServer} from "apollo-server-express";
import cors from "cors";
import  typeDefs  from "./graphql/schema";
import resolvers from "./graphql/resolvers";



const app = express();
const port = process.env.PORT||5000;

app.use(cors());
app.use(express.urlencoded({extended: true}));

// app.use("/graphql", cors(), express.urlencoded({extended: true}));
app.get("/getStaffs", (req, res) => {
  res.json({msg: "CORS Enabled globally"});
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});


apolloServer.applyMiddleware({app, cors:false});

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
    
});