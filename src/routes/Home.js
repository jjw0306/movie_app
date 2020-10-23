import React from "react";
import Movie from "../components/Movie";
import "./Home.css";
import useAxios from "../useAxios";

function Home() {
  const { loading, error, data, refetch } = useAxios({
    method: "get",
    url:
      "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json",
  });
  console.log(` 
      Loading: ${loading}
      Error: ${error}
      Data: ${data}
  `);
  console.log(data);
  const movies = data ? data.data.data.movies : null;
  console.log(movies);

  return (
    <section className="container">
      {movies ? (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      ) : (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      )}
    </section>
  );
}

export default Home;
