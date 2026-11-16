import axios from "axios";

const Home = () => {
  return (
    <div>
      <section className="hero">
        <svg className="film__strip" viewBox="0 0 1200 700" preserveAspectRatio="none">
          <path
          className="film__body"
          d="M-100 100
          C200 350, 350 50, 600 250
          S900 600, 1300 350">
          </path>
          <path
          className="film__holes"
          d="M-100 75
          C200 325, 350 25, 600 225
          S900 575, 1300 325">
          </path>
          <path
          className="film__holes"
          d="M-100 125
          C200 375, 350 75, 600 275
          S900 625, 1300 375">
          </path>
        </svg>  
        <div className="hero__content">
          <p className="hero__eyebrow">YOUR NEXT MOVIE AWAITS</p>
          <h1 className="title">Search. Discover. Watch.</h1>
          <p className="sub-title">Find something you'll love from thousands of movies</p>
          <form id="searchForm" className="search__bar">
            <input
              id="searchInput"
              className="search__input" type="text"
              placeholder="Search by title..." />
              <button id="searchButton" className="search__btn" type="submit">Search</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;