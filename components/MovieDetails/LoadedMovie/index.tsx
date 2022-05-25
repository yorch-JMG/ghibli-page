import Image from 'next/image';

type LoadedMovieProp = {
  film: any;
};

export const LoadedMovie = ({film}: LoadedMovieProp) => {
  if (film.image) {
    return (
      <div className="px-3 mt-5 max-w-6xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold pb-6">{film.title}</h1>
          <div className="block md:hidden w-full md:w-2/3 md:h-fit md:my-auto pb-3 md:pb-0">
            <Image
              src={film.image}
              layout="responsive"
              height={300}
              width={200}
              loading="eager"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full h-fit">
          <div className="w-full md:w-1/2 pb-3 md:pb-0 md:pr-3 space-y-1">
            <h4 className="font-bold">Original title:</h4>
            <p>{film.original_title}</p>
            <h4 className="font-bold">Original title romanised:</h4>
            <p>{film.original_title_romanised}</p>
            <h4 className="font-bold">Release date:</h4>
            <p>{film.release_date}</p>
            <h4 className="font-bold">Running time:</h4>
            <p>{film.running_time} minutes</p>
            <h4 className="font-bold">Director:</h4>
            <p>{film.director}</p>
            <h4 className="font-bold">Producer:</h4>
            <p>{film.producer}</p>
            <h4 className="font-bold">Description:</h4>
            <p>{film.description}</p>
            <h4 className="font-bold">Rotten tomatoes score:</h4>
            <p>{film.rt_score}</p>
            <div className="w-full">
              <h4 className="font-bold">Movie banner:</h4>
              <Image
                src={film.movie_banner}
                layout="responsive"
                height={300}
                width={600}
                loading="eager"
              />
            </div>
          </div>
          <div className="hidden w-full md:block md:w-2/3 md:h-fit md:my-auto">
            <Image
              src={film.image}
              layout="responsive"
              height={300}
              width={200}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-3xl mx-auto mt-5 px-3">
      <h1 className="font-bold text-2xl">No movie found, go back!</h1>
      <Image
        className="mx-auto"
        src='/errorImage.png'
        width={500}
        height={500}
      />
    </div>
  );
};
