import {NextPage} from 'next';
import {useRouter} from 'next/router';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';
import {useState, useEffect} from 'react';
import {getMovieById} from '../data-functions/GetMovieById';
import {LoadedMovie} from '../components/MovieDetails/LoadedMovie';
import {LoadingSpinner} from '../components/LoadingSpinner';

const MovieDetails: NextPage = () => {
  const router = useRouter();
  const movieId = router.query.movieId;

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
    const loadMovie = async () => {
      const getMovie = await getMovieById(movieId);
      setMovie(getMovie);
    };


  useEffect(() => {
    loadMovie();
		if(movie) setIsLoading(false)
  }, [loadMovie]);


  return (
    <div>
      <Header />
			{isLoading ? <LoadingSpinner /> : <LoadedMovie film={movie} />} 

      <Footer />
    </div>
  );
};

export default MovieDetails;
