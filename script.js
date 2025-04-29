// const searchBox = document.querySelector("#movie-search-box");
// const searchList = document.querySelector("#search-list");

// // Set default data to local storage
// if (!localStorage.getItem("favMovies")) {
//     localStorage.setItem("favMovies", JSON.stringify([]));
// }

// // Find movies for the user
// const findMovies = () => {
//     let searchTerm = searchBox.value.trim();
//     if (searchTerm.length > 0) {
//         searchList.classList.remove("hide-search-list");
//         fetchMovies(searchTerm);
//     } else {
//         searchList.classList.add("hide-search-list");
//     }
// };

// // Fetching movies from OMDB API
// async function fetchMovies(searchTerm) {
//     const URL = `http://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=b2b1bcd6`;
//     const res = await fetch(URL);
//     const data = await res.json();
//     console.log(data);
//     if (data.Response === "True") {
//         displayMoviesList(data.Search);
//     }
// }

// // Displaying matched movies in the suggestions box
// const displayMoviesList = (movies) => {
//     searchList.innerHTML = "";
//     movies.forEach((movie) => {
//         let movieListItem = document.createElement("div");
//         movieListItem.dataset.id = movie.imdbID;
//         movieListItem.classList.add("search-list-item");

//         const moviePoster = movie.Poster !== "N/A" ? movie.Poster : "notFound.png";
//         movieListItem.innerHTML = `
//             <div class="search-item-thumbnail">
//                 <img src="${moviePoster}" alt="movie">
//             </div>
//             <div class="search-item-info">
//                 <h3>${movie.Title}</h3>
//                 <p>${movie.Year}</p>
//             </div>
//         `;
//         searchList.appendChild(movieListItem);
//     });
//     loadMovieDetails();
// };

// // Loading movie details
// const loadMovieDetails = () => {
//     const searchListMovies = searchList.querySelectorAll(".search-list-item");
//     searchListMovies.forEach((movie) => {
//         movie.addEventListener("click", () => {
//             searchList.classList.add("hide-search-list");
//             searchBox.value = "";
//             localStorage.setItem("movieID", movie.dataset.id);
//             window.open("./moviepage.html","_self");
//         });
//     });
// };

// // Adding Event Listeners to different elements
// window.addEventListener("click", (e) => {
//     if (e.target.className !== "form-control") {
//         searchList.classList.add("hide-search-list");
//     }
// });

// searchBox.addEventListener("keyup", findMovies);
// searchBox.addEventListener("click", findMovies);
