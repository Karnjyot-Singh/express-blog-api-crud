import express from 'express';
const app = express();
const port = 3000;
app.use(express.json());


app.use(express.static("public"));


import postRouter from './routers/posts.js';


app.use("/posts", postRouter);

app.listen (port,()=>{
    console.log("In Ascolto");
});