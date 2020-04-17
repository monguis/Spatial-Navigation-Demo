import React, { useState } from 'react'
import MenuSlider from "../../components/MenuSlider";
// import createReactClass from 'create-react-class'
// import { render } from 'react-dom'
// import { browserHistory, Router, Route, Link, withRouter } from 'react-router'

// import withExampleBasename from '../withExampleBasename'

const Test = () => {

   const [testArray,changeArray] = useState({array:[{
        "Title": "Capernaum",
        "Year": "2018",
        "Rated": "R",
        "Released": "20 Sep 2018",
        "Runtime": "126 min",
        "Genre": "Drama",
        "Director": "Nadine Labaki",
        "Writer": "Nadine Labaki (screenplay), Jihad Hojeily (screenplay), Michelle Keserwany (screenplay), Georges Khabbaz (in collaboration with), Khaled Mouzanar (in collaboration with)",
        "Actors": "Zain Al Rafeea, Yordanos Shiferaw, Boluwatife Treasure Bankole, Kawsar Al Haddad",
        "Plot": "While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect.",
        "Language": "Arabic, Amharic",
        "Country": "Lebanon, France, USA, Cyprus, Qatar",
        "Awards": "Nominated for 1 Oscar. Another 33 wins & 39 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmExNzU2ZWMtYzUwYi00YmM2LTkxZTQtNmVhNjY0NTMyMWI2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "90%"
            },
            {
                "Source": "Metacritic",
                "Value": "75/100"
            }
        ],
        "Metascore": "75",
        "imdbRating": "8.4",
        "imdbVotes": "35,649",
        "imdbID": "tt8267604",
        "Type": "movie",
        "DVD": "26 Mar 2019",
        "BoxOffice": "N/A",
        "Production": "Sony Pictures Classics",
        "Website": "N/A",
        "Response": "True"
    }, {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "Rated": "PG-13",
        "Released": "27 Apr 2018",
        "Runtime": "149 min",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "Anthony Russo, Joe Russo",
        "Writer": "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos,  Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)",
        "Actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
        "Plot": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Nominated for 1 Oscar. Another 44 wins & 70 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.5/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "85%"
            },
            {
                "Source": "Metacritic",
                "Value": "68/100"
            }
        ],
        "Metascore": "68",
        "imdbRating": "8.5",
        "imdbVotes": "741,841",
        "imdbID": "tt4154756",
        "Type": "movie",
        "DVD": "14 Aug 2018",
        "BoxOffice": "$664,987,816",
        "Production": "Walt Disney Pictures",
        "Website": "N/A",
        "Response": "True"
    }, {
        "Title": "Coco",
        "Year": "2017",
        "Rated": "PG",
        "Released": "22 Nov 2017",
        "Runtime": "105 min",
        "Genre": "Animation, Adventure, Family, Fantasy, Music, Mystery",
        "Director": "Lee Unkrich, Adrian Molina(co-director)",
        "Writer": "Lee Unkrich (original story by), Jason Katz (original story by), Matthew Aldrich (original story by), Adrian Molina (original story by), Adrian Molina (screenplay by), Matthew Aldrich (screenplay by)",
        "Actors": "Anthony Gonzalez, Gael García Bernal, Benjamin Bratt, Alanna Ubach",
        "Plot": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
        "Language": "English, Spanish",
        "Country": "USA",
        "Awards": "Won 2 Oscars. Another 107 wins & 35 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            },
            {
                "Source": "Metacritic",
                "Value": "81/100"
            }
        ],
        "Metascore": "81",
        "imdbRating": "8.4",
        "imdbVotes": "314,769",
        "imdbID": "tt2380307",
        "Type": "movie",
        "DVD": "27 Feb 2018",
        "BoxOffice": "$208,487,719",
        "Production": "Disney/Pixar",
        "Website": "N/A",
        "Response": "True"
    }, {
        "Title": "Three Billboards Outside Ebbing, Missouri",
        "Year": "2017",
        "Rated": "R",
        "Released": "01 Dec 2017",
        "Runtime": "115 min",
        "Genre": "Comedy, Crime, Drama",
        "Director": "Martin McDonagh",
        "Writer": "Martin McDonagh",
        "Actors": "Frances McDormand, Caleb Landry Jones, Kerry Condon, Sam Rockwell",
        "Plot": "A mother personally challenges the local authorities to solve her daughter's murder when they fail to catch the culprit.",
        "Language": "English",
        "Country": "UK, USA",
        "Awards": "Won 2 Oscars. Another 130 wins & 222 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjI0ODcxNzM1N15BMl5BanBnXkFtZTgwMzIwMTEwNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "90%"
            },
            {
                "Source": "Metacritic",
                "Value": "88/100"
            }
        ],
        "Metascore": "88",
        "imdbRating": "8.2",
        "imdbVotes": "382,103",
        "imdbID": "tt5027774",
        "Type": "movie",
        "DVD": "27 Feb 2018",
        "BoxOffice": "$52,000,189",
        "Production": "Fox Searchlight Pictures",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Logan",
        "Year": "2017",
        "Rated": "R",
        "Released": "03 Mar 2017",
        "Runtime": "137 min",
        "Genre": "Action, Drama, Sci-Fi, Thriller",
        "Director": "James Mangold",
        "Writer": "James Mangold (story by), Scott Frank (screenplay by), James Mangold (screenplay by), Michael Green (screenplay by)",
        "Actors": "Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook",
        "Plot": "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
        "Language": "English, Spanish",
        "Country": "USA",
        "Awards": "Nominated for 1 Oscar. Another 26 wins & 73 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "77/100"
            }
        ],
        "Metascore": "77",
        "imdbRating": "8.1",
        "imdbVotes": "594,007",
        "imdbID": "tt3315342",
        "Type": "movie",
        "DVD": "23 May 2017",
        "BoxOffice": "$226,276,809",
        "Production": "20th Century Fox",
        "Website": "N/A",
        "Response": "True"
    }, {
        "Title": "Dangal",
        "Year": "2016",
        "Rated": "Not Rated",
        "Released": "21 Dec 2016",
        "Runtime": "161 min",
        "Genre": "Action, Biography, Drama, Sport",
        "Director": "Nitesh Tiwari",
        "Writer": "Piyush Gupta, Shreyas Jain, Nikhil Mehrotra, Rajshri Sudhakar (Dialogue Writer: Telugu), Nitesh Tiwari",
        "Actors": "Aamir Khan, Fatima Sana Shaikh, Sanya Malhotra, Sakshi Tanwar",
        "Plot": "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
        "Language": "Hindi, Tamil, Telugu",
        "Country": "India",
        "Awards": "23 wins & 6 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "88%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.4",
        "imdbVotes": "134,986",
        "imdbID": "tt5074352",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "$12,382,287",
        "Production": "Aamir Khan Productions",
        "Website": "N/A",
        "Response": "True"
    }, {
        "Title": "The Invisible Guest",
        "Year": "2016",
        "Rated": "N/A",
        "Released": "06 Jan 2017",
        "Runtime": "106 min",
        "Genre": "Crime, Mystery, Thriller",
        "Director": "Oriol Paulo",
        "Writer": "Oriol Paulo",
        "Actors": "Mario Casas, Ana Wagener, Jose Coronado, Bárbara Lennie",
        "Plot": "A successful entrepreneur accused of murder and a witness preparation expert have less than three hours to come up with an impregnable defence.",
        "Language": "Spanish",
        "Country": "Spain",
        "Awards": "2 wins & 2 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDk0YzAwYjktMWFiZi00Y2FmLWJmMmMtMzUyZDZmMmU5MjkzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.1",
        "imdbVotes": "99,512",
        "imdbID": "tt4857264",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    }, {
        "Title": "Hacksaw Ridge",
        "Year": "2016",
        "Rated": "R",
        "Released": "04 Nov 2016",
        "Runtime": "139 min",
        "Genre": "Biography, Drama, History, War",
        "Director": "Mel Gibson",
        "Writer": "Robert Schenkkan (screenplay by), Andrew Knight (screenplay by)",
        "Actors": "Andrew Garfield, Richard Pyros, Jacob Warner, Milo Gibson",
        "Plot": "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people, and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
        "Language": "English, Japanese",
        "Country": "Australia, USA",
        "Awards": "Won 2 Oscars. Another 51 wins & 114 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "85%"
            },
            {
                "Source": "Metacritic",
                "Value": "71/100"
            }
        ],
        "Metascore": "71",
        "imdbRating": "8.1",
        "imdbVotes": "393,120",
        "imdbID": "tt2119532",
        "Type": "movie",
        "DVD": "21 Feb 2017",
        "BoxOffice": "$67,115,062",
        "Production": "Summit Entertainment",
        "Website": "N/A",
        "Response": "True"
    }, {
        "Title": "Your Name.",
        "Year": "2016",
        "Rated": "PG",
        "Released": "07 Apr 2017",
        "Runtime": "106 min",
        "Genre": "Animation, Drama, Fantasy, Romance",
        "Director": "Makoto Shinkai",
        "Writer": "Makoto Shinkai (based on his novel), Makoto Shinkai (screenplay), Clark Cheng (english script)",
        "Actors": "Ryûnosuke Kamiki, Mone Kamishiraishi, Ryô Narita, Aoi Yûki",
        "Plot": "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        "Language": "Japanese",
        "Country": "Japan",
        "Awards": "15 wins & 25 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "79/100"
            }
        ],
        "Metascore": "79",
        "imdbRating": "8.4",
        "imdbVotes": "157,400",
        "imdbID": "tt5311514",
        "Type": "movie",
        "DVD": "07 Nov 2017",
        "BoxOffice": "$4,676,810",
        "Production": "FUNimation Films",
        "Website": "N/A",
        "Response": "True"
    }]});
 console.log(testArray);

 const testFunc = ()=>{
     console.log("test brotha")
    let auxArr = testArray.array;
     console.log(auxArr)
     auxArr.push(auxArr.shift());
     console.log(auxArr)
    changeArray({...testArray,array:auxArr});
 }
 
 return (<><MenuSlider items={testArray.array} category={"test"} row={0} />
    <button onClick={()=>{testFunc()}}>tesst</button></>)
}

export default Test;
// const Test = withRouter(
//   createReactClass({

//     getInitialState() {
//       return {
//         tacos: [
//           { name: 'duck confit' },
//           { name: 'carne asada' },
//           { name: 'shrimp' }
//         ]
//       }
//     },

//     addTaco() {
//       let name = prompt('taco name?')

//       this.setState({
//         tacos: this.state.tacos.concat({ name })
//       })
//     },

//     handleRemoveTaco(removedTaco) {
//       this.setState({
//         tacos: this.state.tacos.filter(function (taco) {
//           return taco.name != removedTaco
//         })
//       })

//       this.props.router.push('/')
//     },

//     render() {
//       let links = this.state.tacos.map(function (taco, i) {
//         return (
//           <li key={i}>
//             <Link to={`/taco/${taco.name}`}>{taco.name}</Link>
//           </li>
//         )
//       })
//       return (
//         <div className="Test">
//           <button onClick={this.addTaco}>Add Taco</button>
//           <ul className="Master">
//             {links}
//           </ul>
//           <div className="Detail">
//             {this.props.children && React.cloneElement(this.props.children, {
//               onRemoveTaco: this.handleRemoveTaco
//             })}
//           </div>
//         </div>
//       )
//     }
//   })
// )

// const Taco = createReactClass({
//   remove() {
//     this.props.onRemoveTaco(this.props.params.name)
//   },

//   render() {
//     return (
//       <div className="Taco">
//         <h1>{this.props.params.name}</h1>
//         <button onClick={this.remove}>remove</button>
//       </div>
//     )
//   }
// })

// render((
//   <Router history={withExampleBasename(browserHistory, __dirname)}>
//     <Route path="/" component={Test}>
//       <Route path="taco/:name" component={Taco} />
//     </Route>
//   </Router>
// ), document.getElementById('example'))

