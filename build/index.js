"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import ApolloExpressServer from "apollo-server-express";
var app = express_1.default();
var port = 5000;
app.get("/", function (req, res) {
    res.end("We are live on port " + port);
});
app.listen(port, function () {
    console.log("Server listening on port " + port + "...");
});
