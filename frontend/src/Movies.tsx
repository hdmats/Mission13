import { useEffect, useState } from 'react';
import { Movies } from './MoviesType';

function MoviesTable() {
  const [movies, setMovies] = useState<Movies[]>([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovies(temp);
      console.log(temp);
    };

    fetchMovies();
  }, []);

  return (
    <table className="table table-bordered table-striped">
      <thead className="font-weight-bold">
        <tr>
          <td>Title</td>
          <td>Category</td>
          <td>Year</td>
          <td>Rating</td>
          <td>Director</td>
          <td>Edited</td>
          <td>Lent To</td>
          <td>Notes</td>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.movieId}>
            <td>{movie.title}</td>
            <td>{movie.category}</td>
            <td>{movie.year}</td>
            <td>{movie.rating}</td>
            <td>{movie.director}</td>
            <td>{movie.edited}</td>
            <td>{movie.lentTo}</td>
            <td>{movie.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MoviesTable;
