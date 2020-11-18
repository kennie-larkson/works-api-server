import express from "express";
// import ApolloExpressServer from "apollo-server-express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.end(`We are live on port ${port}`);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
    
});