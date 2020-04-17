const express = require("express");
const PORT = process.env.PORT || 4000;
const app = express();
const topMovies = require('./top-250-movies.json');
// const favorites = require('./favorites.json');


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  next();
});

// Send every request to the React app
// Define any API routes before this runs

app.get('/', function (req, res) {
  res.send('Movie API works!');
});

app.get('/api/movies', (req, res) => {
  const movies = Object.values(topMovies);
  res.send(movies);
});

// app.post('/api/favorites/', (req, res) => {
//   const favMovs = Object.values(favorites);
//   favMovs.push(req.body);
//   res.send(favMovs);
// });

// app.get('/api/favorites/', (req, res) => {
//   const favMovs = Object.values(favorites);
//   res.send(favMovs);
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
