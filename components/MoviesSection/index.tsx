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
	const [inputText, setInputText] = useState('');

  const loadMovies = async () => {
    const getMovies = await getAllMovies();
    setMovies(getMovies);
  };

	const inputHandler = (e:any) => {
		setInputText(e.target.value.toLowerCase())
	}

  useEffect(() => {
    loadMovies();
    if (movies) setIsLoading(false);
  }, [loadMovies]);

  return (
    <div className="px-3 mt-5 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Movie section</h1>
      <h4>This is a fanmade ghibli encyclopedia!</h4>
      <input
        type="text"
				placeholder='Enter a name!'
				onChange={inputHandler}
        className="shadow appearance-none border rounded-sm w-1/2 py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      {isLoading && movies ? (
        <LoadingSpinner />
      ) : (
        <LoadedMovies movies={movies} inputText={inputText}/>
      )}
    </div>
  );
};
