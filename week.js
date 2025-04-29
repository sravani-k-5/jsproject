const resultContainer = document.querySelector(".result-container");

// Function to fetch movies from the server
async function getData() {
    const url = 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10';
    const options = {
        method: 'GET',
        headers: {
            // Replace 'YOUR_RAPIDAPI_KEY' with your actual RapidAPI key
            'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
            'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
        }
    };
    try {
        // Fetch data from API
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Clear previous results
        resultContainer.innerHTML = '';

        // Store data in localStorage
        localStorage.setItem("weekTop10", JSON.stringify(data.data));

        // Check if data array exists and has movies
        if (data.data && data.data.length > 0) {
            data.data.forEach(movie => {
                // Create a card for each movie
                const movieCard = document.createElement("div");
                movieCard.classList.add("movie-card");

                // Create an image element for the movie poster
                const movieImage = document.createElement("img");
                movieImage.src = movie.primaryImage?.imageUrl || 'https://via.placeholder.com/150';
                movieImage.alt = movie.originalTitleText?.text || "Movie Poster";
                movieImage.classList.add("movie-image");

                // Create a heading for the movie title
                const movieTitle = document.createElement("h3");
                movieTitle.textContent = movie.originalTitleText?.text || "Untitled";
                movieTitle.classList.add("movie-title");

                // Create a paragraph for the movie rating
                const movieRating = document.createElement("p");
                movieRating.textContent = `Rating: ${movie.ratingsSummary?.aggregateRating || "N/A"}`;
                movieRating.classList.add("movie-rating");

                // Create a paragraph for the release year
                const movieYear = document.createElement("p");
                movieYear.textContent = `Year: ${movie.releaseYear?.year || "Unknown"}`;
                movieYear.classList.add("movie-year");

                // Append all elements to the movie card
                movieCard.appendChild(movieImage);
                movieCard.appendChild(movieTitle);
                movieCard.appendChild(movieRating);
                movieCard.appendChild(movieYear);

                // Append the movie card to the result container
                resultContainer.appendChild(movieCard);
            });
        } else {
            // Display a message if no movies are found
            const noMoviesMessage = document.createElement("p");
            noMoviesMessage.textContent = "No movies found.";
            noMoviesMessage.classList.add("no-movies-message");
            resultContainer.appendChild(noMoviesMessage);
        }
    } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
        resultContainer.innerHTML = '';
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `Failed to load movies: ${error.message}`;
        errorMessage.classList.add("error-message");
        resultContainer.appendChild(errorMessage);
    }
}

// Call the function to fetch and display movies
getData();
