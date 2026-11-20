//api key = 624cd05f

import { useState } from "react";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";
import { useNavigate } from "react-router-dom";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedMovieID, setSelectedMovieID] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    const title = searchQuery.trim();
    if (!title) return;

    navigate(`/discover?q=${encodeURIComponent(title)}`);
    

    setLoading(true);
    setMessage("");
    setMovies([]);

    try {
      const apiKey = process.env.REACT_APP_OMDB_API_KEY;
      const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(title)}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setMessage("");
      } else {
        setMovies([]);
        setMessage(data.Error || "No movies found.");
      }
    } catch {
      setMovies([]);
      setMessage("Could not load movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="hero">
        <svg
          className="film__strip"
          viewBox="0 0 1200 700"
          preserveAspectRatio="none"
        >
          <path
            className="film__body"
            d="M-100 100
          C200 350, 350 50, 600 250
          S900 600, 1300 350"
          ></path>
          <path
            className="film__holes"
            d="M-100 75
          C200 325, 350 25, 600 225
          S900 575, 1300 325"
          ></path>
          <path
            className="film__holes"
            d="M-100 125
          C200 375, 350 75, 600 275
          S900 625, 1300 375"
          ></path>
        </svg>
        <div className="hero__content">
          <p className="hero__eyebrow">YOUR NEXT MOVIE AWAITS</p>
          <h1 className="title">Search. Discover. Watch.</h1>
          <p className="sub-title">
            Find something you'll love from thousands of movies
          </p>
          <form id="searchForm" className="search__bar" onSubmit={handleSearch}>
            <input
              id="searchInput"
              className="search__input"
              type="text"
              placeholder="Search by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              id="searchButton"
              className="search__btn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </form>
        </div>
      </section>

      <section id="results">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onSelect={setSelectedMovieID}
          />
        ))}
      </section>

      {selectedMovieID && (
        <MovieDetails
          imdbID={selectedMovieID}
          onClose={() => setSelectedMovieID(null)}
        />
      )}
    </div>
  );
}

export default Home;
