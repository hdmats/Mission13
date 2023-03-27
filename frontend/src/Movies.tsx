import data from './MovieData.json';
const Movies = data.MovieData;
function MoviesTable() {
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
        </tr>
      </thead>
      <tbody>
        {Movies.map((movie) => (
          <tr>
            <td>{movie.Title}</td>
            <td>{movie.Category}</td>
            <td>{movie.Year}</td>
            <td>{movie.Rating}</td>
            <td>{movie.Director}</td>
            <td>{movie.Edited}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MoviesTable;
