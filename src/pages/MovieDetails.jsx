import { useEffect, useState } from "react";

function MovieDetails({ imdbID, onClose }) {
  const [movie, setMovie] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!imdbID) return;

    async function getMovieDetails() {
      try {
        const apiKey = process.env.REACT_APP_OMBD_API_KEY;
        const response = await fetch(
          `https://www.omdbapi.com/?i=tt0848228&apikey=624cd05f`,
        );
        const data = await response.json();

        if (data.Response === "True") {
          setMovie(data);
        } else {
          setMessage(data.Error || "Could not load movie details.");
        }
      } catch {
        setMessage("Could not load movie details. Please try again.");
      }
    }

    getMovieDetails();
  }, [imdbID]);

  if (message) return <div className="movie__details">{message}</div>;
  if (movie)
    return <div className="movie__details"> Loading movie details...</div>;

  return (
    <div className="movie__details--backdrop" onClick={onClose}>
      <article
        className="movie__details"
        role="dialog"
        aria-modal="true"
        aria-labelledby="movie-details-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" onClick={onClose} aria-label="Close details">
          x
        </button>

        {movie.Poster !== "N/A" && (
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
        )}

        <div>
          <h2 id="movie__details--title">
            {movie.Title} ({movie.Year})
          </h2>
          <p>
            <strong>Rated:</strong> {movie.Rated}
          </p>
          <p>
            <strong>Released:</strong> {movie.Released}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.Runtime}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>IMDb rating:</strong> {movie.imdbRating}
          </p>
        </div>
      </article>
    </div>
  );
}

export default MovieDetails;
