/* This file is responsible for containing the logic that is creating the server using express */

const express = require('express'); /* Includes express into server file */

const app = express(); /* Initialises express */
const port = 3000;

app.use(express.static('public')); /*  Serves static content from a directory known as 'public'. Loads static files (html, stylesheets, images etc) */

app.listen(port, () => { /*  Binds connection between the host (this server) and the port number assigned*/
    console.log('Server listening at http://localhost:${port}')
})