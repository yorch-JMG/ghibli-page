import React, {useEffect, useState} from 'react';
import {getAllMovies} from '../../data-functions/GetAllMovies';
import {LoadingSpinner} from '../LoadingSpinner';
import {LoadedMovies} from './LoadedMovies';
export interface MovieCardProps {
  id: string;
  title: string;
  original_title: string;
  image: string;
  release_date: string;
}

export const MovieSection: React.FC = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
    const loadMovies = async () => {
      const getMovies = await getAllMovies();
      setMovies(getMovies);
    };


  useEffect(() => {
    loadMovies();
		if(movies) setIsLoading(false)
  }, [loadMovies]);

  return (
    <div className="px-3 mt-5 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Movie section</h1>
      <h4>This is a fanmade ghibli encyclopedia!</h4>
      {isLoading && movies ? <LoadingSpinner /> : <LoadedMovies movies={movies} />}
    </div>
  );
};
