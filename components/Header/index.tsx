import Image from 'next/image';
import Link from 'next/link';
import {HomeIcon, SearchIcon} from '@heroicons/react/outline';

export const Header: React.FC = () => {
  return (
    <header className="flex flex-col sm:flex-row mt-5 justify-between items-center align-center sticky top-0 z-50 bg-white shadow-sm">
		<div className="flex flex-grow justify-evenly max-w-2xl mt-5 md:mt-0 lg:mt-0">
        <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-gray">
          <HomeIcon className="h-8" />
        </div>
        <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-gray">
          <SearchIcon className="h-8" />
        </div>
      </div>
      <Link href="/">
        <a>
          <Image
            className="object-contain"
            src="https://static.wikia.nocookie.net/studioghibli/images/d/d4/Studio_Ghibli.png/revision/latest/scale-to-width-down/1200?cb=20200410033324&path-prefix=es"
            height={100}
            width={200}
          />
        </a>
      </Link>
    </header>
  );
};
