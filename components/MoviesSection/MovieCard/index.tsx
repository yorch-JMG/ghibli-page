import Image from 'next/image';

export interface MovieCardProps {
  title: string;
  original_title: string;
  image: string;
  release_date: string;
}

export const MovieCard = ({
  title,
  original_title,
  image,
  release_date,
}: MovieCardProps) => {
  return (
    <div>
      <Image src={image} height={100} width={200} />
      <h1>{title}</h1>
      <h4>{original_title}</h4>
      <h4>{release_date}</h4>
    </div>
  );
};
