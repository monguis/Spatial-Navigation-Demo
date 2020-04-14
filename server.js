const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const topMovies = require('./top-250-movies.json');

// Serve up static assets (usually on heroku)
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

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
