import { LoadingMovieCard } from './LoadingMovieCard';
import shortid from 'shortid'

export const LoadingMovies = () => {
		let dummyData = []
		for (let i = 0; i<9; ++i) {
			let dummyDataElement = {
				id: shortid.generate(),
				title: 'dummy',
				original_title: 'dummy',
				image: 'dummy',
				release_date: 'dummy'
			}
			dummyData.push(dummyDataElement)
		}
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {dummyData.map((movie: any) => {
          return (
            <div key={movie.id}>
              <LoadingMovieCard
                title={movie.title}
                original_title={movie.original_title}
                release_date={movie.release_date}
              />
            </div>
          );
        })}
      </div>
    );
};
