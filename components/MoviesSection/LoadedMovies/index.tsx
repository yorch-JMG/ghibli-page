import {MovieCard} from '../MovieCard';

export const LoadedMovies = ({movies, inputText}: any) => {
  if (movies) {
    const filteredMovies = movies.filter((movie: any) => {
      if (inputText === '') return movie;
      else {
        return movie.title.toLowerCase().includes(inputText);
      }
    });
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredMovies.map((movie: any) => {
          return (
            <div key={movie.id}>
              <MovieCard
                id={movie.id}
                title={movie.title}
                original_title={movie.original_title}
                image={movie.image}
                release_date={movie.release_date}
              />
            </div>
          );
        })}
      </div>
    );
  }
  return <div>Movies not loaded</div>;
};
