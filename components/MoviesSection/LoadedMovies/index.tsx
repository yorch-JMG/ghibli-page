import {MovieCard} from '../MovieCard';

export const LoadedMovies = ({movies}: any) => {
  if (movies) {
    return (
      <div>
        {movies.map((movie: any) => {
          return (
							<div key={movie.id}>
            <MovieCard
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
