// import express library
const express = require('express');

// create an instance of the Express app
const app = express();

// define the port you want the server to listen to
const port = 3000;

// create a basic route, '/' represents the root URL, defining a GET route, when someone visits the site, this will get triggered
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.post('/data', (req, res) => {
    res.send('Message recieved');
});

// dynamic GET request: Request fatches different data based on input
app.get('/users/:id', (req, res) => { // :id is a URL parameter (a placeholder for dynamic values)
    const userId = req.params.id; // Extract the dynamic value from the URL. When a request is made to http://localhost:3000/user/123, Express extracts 123 from the URL and assigns it to req.params.id.
    res.send(`user id is: ${userId}`);
}); 

// start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});