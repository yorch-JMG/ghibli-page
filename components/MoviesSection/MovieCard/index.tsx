import Image from 'next/image';
import Link from 'next/link';

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
    <Link href="/">
      <div className="hover:bg-gray-200 p-3 w-fit rounded-sm cursor-pointer">
        <Image src={image} height={400} width={280} />
        <h1 className="text-lg font-bold">{title}</h1>
        <h4>{original_title}</h4>
        <h4 className="italic">{release_date}</h4>
      </div>
    </Link>
  );
};
