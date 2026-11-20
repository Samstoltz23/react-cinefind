import {useEffect, useState } from "react";
import {useSearchParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";

function Discover() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedMovieID, setSelectedMovieID] = useState(null);
  const [sort, setSort] = useState("az");

  useEffect(() => {
    if (!query) {
      setMovies([]);
      setMessage("Search for a movie from the home page.");
      return;
    }

    async function searchMovies() {
      setLoading(true);
      setMessage("");

      try {
        const apiKey = process.env.REACT_APP_OMDB_API_KEY;
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMessage(data.Error || "Could not load movie details.");
        }
      } catch {
        setMessage("Could not load movie details. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    searchMovies();
  }, [query]);

  const sortedMovies = [...movies].sort((a, b) => {
    if (sort === "az") return a.Title.localeCompare(b.Title);
    if (sort === "za") return b.Title.localeCompare(a.Title);
    if (sort === "newest") return Number(b.Year) - (a.Year);
    if (sort === "oldest") return Number(a.Year) - (b.Year);
    return 0;
  });


  return (
   <section id="discover" className="search__results">
    <div className="container">
      <div className="row">
        <h2>Discover Movies</h2>
        <label htmlFor="sortSelect">Sort Movies:</label>
        <select id="sortSelect" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="az">Title: A_Z</option>
          <option value="za">Title: Z_A</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
        {loading && <p>Searching</p>}
        {message && <p>{message}</p>}

        <div className="movie__grid">
          {sortedMovies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onSelect={setSelectedMovieID}
            />
          ))}
        </div>

        {selectedMovieID && (
          <MovieDetails
            imdbID={selectedMovieID}
            onClose={() => setSelectedMovieID(null)}
          />
        )}
      </div>
    </div>  
  </section>
  )
}

export default Discover;