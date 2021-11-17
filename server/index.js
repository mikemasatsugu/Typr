const express = require('express');
const path = require('path'); // NEW
const mongoose = require('mongoose');
const router = express.Router()

mongoose.connect('mongodb://localhost/subscribers', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'))

// const app = express();
// const port = 3000;
// // const DIST_DIR = path.join(__dirname, '../dist'); // NEW
// // const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
const mockResponse = {
  foo: 'bar2',
  bar: 'foo2'
};
// // app.use(express.static(path.join(__dirname, '../dist'))); // NEW
// app.use(express());

// app.get('/api', (req, res) => {
//   console.log('GET request to /api');
//   res.status(200).json(mockResponse);
// })

// // app.get('/api', (req, res) => {
// //   console.log('GET request to /api');
// //   res.status(200).json(mockResponse);
// // });
// // app.get('/', (req, res) => {
// //   console.log('GET request to /');
// //   res.sendFile(path.resolve(__dirname, '../dist/index.html')); // EDIT
// // });



// // catch-all route handler for any requests to an unknown route
// app.use((req, res) => res.sendStatus(418));


// app.listen(port, function () {
//   console.log('App listening on port: ' + port);
// });


const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html')); // EDIT
});


// app.get('/api', (req, res) => {
//   console.log('GET request to /api');
//   res.status(200).json(mockResponse);
// })

app.use((req, res) => {
  res.sendStatus(418);
});

module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));
