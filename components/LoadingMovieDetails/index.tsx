import {Box} from '@chakra-ui/react';
import {Skeleton} from '@chakra-ui/skeleton';

export const LoadingMovie = () => {
  return (
    <div className="px-3 mt-5 max-w-6xl mx-auto">
      <div>
        <Skeleton width="15rem">
          <h1 className="text-3xl font-bold pb-6">dummy title</h1>
        </Skeleton>
        <Box display={['block', 'none', 'none']} width={['100%']} height={['100%']}>
          <Skeleton height="100%" width="100%" />
        </Box>
      </div>
      <div className="flex flex-col md:flex-row w-full h-fit">
        <div className="w-full md:w-1/2 pb-3 md:pb-0 md:pr-3 space-y-1">
          <Skeleton>
            <h4 className="font-bold">Original title:</h4>
            <p>dummy</p>
          </Skeleton>
          <Skeleton>
            <h4 className="font-bold">Original title romanised:</h4>
            <p>dummy</p>
          </Skeleton>
          <Skeleton>
            <h4 className="font-bold">Release date:</h4>
            <p>dummy</p>
          </Skeleton>
          <Skeleton>
            <h4 className="font-bold">Running time:</h4>
            <p>dummy minutes</p>
          </Skeleton>
          <Skeleton>
            <h4 className="font-bold">Director:</h4>
            <p>dummy</p>
          </Skeleton>
          <Skeleton>
            <h4 className="font-bold">Producer:</h4>
            <p>dummy</p>
          </Skeleton>
          <Skeleton>
            <h4 className="font-bold">Description:</h4>
            <p>dummy</p>
          </Skeleton>
          <Skeleton>
            <h4 className="font-bold">Rotten tomatoes score:</h4>
            <p>dummy</p>
          </Skeleton>
          <div className="w-full">
            <Skeleton>
              <h4 className="font-bold">Movie banner:</h4>
            </Skeleton>
            <Skeleton height="10rem" />
          </div>
        </div>
        <Box height={['60rem']} width={['40rem']}>
          <Skeleton height={'100%'} />
        </Box>
      </div>
    </div>
  );
};
