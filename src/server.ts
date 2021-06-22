import express from "express";
import "reflect-metadata";
import "./database";

const app = express();

app.get("/first", (request, response) => {
  return response.send("Ola NLW");
});

app.listen(3000, () => console.log("rodando server "));
