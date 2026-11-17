function Discover() {
  return (
   <section id="discover" className="search__results">
    <div className="container">
      <div className="row">
        <h2>Discover Movies</h2>
        <label htmlFor="sortSelect">Sort Movies:</label>
        <select id="sortSelect">
          <option value="az">Title: A_Z</option>
          <option value="za">Title: Z_A</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
        <div id="results"></div>
      </div>
    </div>  
  </section>
  )
}

export default Discover;