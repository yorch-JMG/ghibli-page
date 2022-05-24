import Image from 'next/image';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="flex flex-col sm:flex-row mt-5 justify-between items-center align-center sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex flex-grow justify-evenly max-w-2xl mt-5 md:mt-0 lg:mt-0"></div>
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
