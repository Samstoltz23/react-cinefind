import { useEffect, useState } from "react";

function MovieDetails({ imdbID, onClose }) {
  const [movie, setMovie] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!imdbID) return;

    async function getMovieDetails() {
      if (!imdbID) return;

      async function getMovieDetails() {
        setLoading(true);
        setMessage("");
        setMovie(null);
      }
    }

    getMovieDetails();
  }, [imdbID]);

  if (loading) {
    return <div className="movie__details">Loading movie details...</div>;
  }

  if (message) return <div className="movie__details">{message}</div>;
  if (!movie) return null;

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
