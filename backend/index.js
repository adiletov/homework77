const express = require('express');
const cors = require('cors');
const publications = require('./app/publications');
const fileDb = require("./fileDb");

const app = express();
const port = 8080;


app.use(cors());
app.use(express.static('public'));

app.use('/publications', publications);

const run  = async () => {
    await fileDb.init();
    app.listen(port);
};

run().catch(e=> {
    console.error(e)
});
