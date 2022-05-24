export const getMovieById = async (id: any) => {
  const response = await fetch(process.env.BASE_URL + '/films/' + id);
  const movie = await response.json();
  return movie;
};
