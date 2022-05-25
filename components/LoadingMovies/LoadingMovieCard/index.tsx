import {Box, Skeleton} from '@chakra-ui/react';

export interface LoadingMovieCardProps {
  title: string;
  original_title: string;
  release_date: string;
}

export const LoadingMovieCard = ({
  title,
  original_title,
  release_date,
}: LoadingMovieCardProps) => {
  return (
    <div className="p-3 w-fit rounded-sm space-y-2">
      <Box height={['20rem']} width={['13rem']}>
        <Skeleton height={['100%']} />
      </Box>
      <Skeleton>
        <h1 className="text-lg font-bold">{title}</h1>
      </Skeleton>
      <Skeleton>
        <h4>{original_title}</h4>
      </Skeleton>
      <Skeleton>
        <h4 className="italic">{release_date}</h4>
      </Skeleton>
    </div>
  );
};
