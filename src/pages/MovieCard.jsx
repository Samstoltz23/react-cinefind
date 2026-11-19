function MovieCard({ movie, onSelect }) {
  return (
    <article key={movie.imdbID} className="movie__card">
      {movie.Poster !== "N/A" && (
        <button
          type="button"
          className="movie__poster--button"
          onClick={() => onSelect(movie.imdbID)}
          aria-label={`show details for ${movie.Title}`}
        >
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
        </button>
      )}
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
    </article>
  );
}

export default MovieCard;
