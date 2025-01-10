const express = require("express"); // import express from 'express';
require("dotenv").config(); // import dotenv from 'dotenv';
require("./database/connection"); // import './database/connection';

const TestRoute = require("./routes/testRoute"); // import TestRoute from './routes/testRoute';
const categoryRoute = require("./routes/categoryRoutes");
const productRoute  = require("./routes/productRoutes");
const userRoute = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");


const app = express(); //  create  express app
const port = process.env.PORT; // set port

app.use(express.json()); // middleware to parse json data

app.use("/api", TestRoute); // use TestRoute
app.use("/api" , categoryRoute);
app.use("/api" , productRoute);
app.use("/api" , userRoute);
app.use("/api" , orderRoutes);


app.use('/public/uploads', express.static('public/uploads'));

// listen to port
app.listen(port, () => {
  console.log(`server is running on port  ${port}`);
});
