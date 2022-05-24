export const getAllMovies = async () => {
  const response = await fetch(process.env.BASE_URL + '/films');
  const movies = await response.json();
  return movies;
};
