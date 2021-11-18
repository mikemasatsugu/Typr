const express = require('express');
const path = require('path'); // NEW
const mongoose = require('mongoose');
const router = express.Router()

mongoose.connect('mongodb://localhost/history', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'))

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html')); // EDIT
});


// Routers
const historyRouter = require('./routes/history')

// app.get('/api', (req, res) => {
//   console.log('GET request to /api');
//   res.status(200).json(mockResponse);
// })

// History Route
app.use('/history', historyRouter);

app.use((req, res) => {
  res.sendStatus(418);
});

module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));
