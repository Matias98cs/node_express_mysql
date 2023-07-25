// modo viejo
// const express = require('express');
// modo moderno
import { PORT } from "./config.js";
import app from "./app.js";

const port = PORT;
app.listen(port);
console.log(`Server listening on port localhost:${port}`);
