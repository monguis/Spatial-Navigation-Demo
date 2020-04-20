# NetLuZon (Top Movies Menu + API) 
#### by Juan Carlos Castellanos Navarro

NetLuZon is a React based app that has the best movies ever and displays them in tiles for you to check out.

# Get Started
### Setup
You must have [node](https://nodejs.org/en/download/) installed.

### Install 
Make this directory as your working directory in your terminal. Then install dependencies with the command `npm install`. 

### Start App
Run the command `npm start` in the terminal. The Web App should be accessible at `http://localhost:3000` and `http://<your-ip>:3000` and server is accessible through port `http://localhost:4000`

### Side Note
Truth be told, there are not many changes about installation and setup processes from base file (provided by Hansel Lopez). Although I changed the port to 3000, I hope you don't mind.

## API Endpoints

### `GET http://localhost:4000/api/movies`
Will return an array of the top 250 movies from IMDB.

# Web App Functionality

## Home page

Home Page displays grid menu that you can navigate. Each menu tile has a little heart on the top right corner, If the heart if full, It means that you added that movie as one of your favorite.The site displays shelves that contain:
* Top of 2019.
* Top of 2018.
* Mystery Drama.
* Action.
* Fantasy.
* Thriller.
* Favorites (if any).

### Navigation
You can use your keyboard to navigate through NetLuZon:

* Arrow keys: Navigate through the movie tiles.
* Enter Key: Selects a movie and takes you to that movie details page.

## Movie Info Page
This page displays details about a selected movie. You will see a heart icon that represents if that movie is part of your favorites as well as:
* Movie Poster.
* Title.
* IMDB Rating.
* Genres.
* Year Released.
* Duration in minutes.
* Age Rating.
* Plot Summary.
* Director.
* Production Company.
* Stars.

### Navigation

* Enter Key: Allows you to save/delete a move to favorites.
* Escape Key: Takes you back to Home page (Menu)

# Built with
* React.js
* express.js (backend)
* HTML
* CSS
* Bootstrap (React and Vanilla CSS)

# Authors

* **Juan Carlos Castellanos Navarro** - [monguis](https://github.com/monguis)

See also the list of contributors who participated in this project.