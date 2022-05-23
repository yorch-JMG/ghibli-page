import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-5 shadow-inner">
      <div className="px-5 py-5 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div>
            <h1 className="font-bold text-xl pb-2">Credits</h1>
            <p>This a project made by yorch-JMG!</p>
            <p className="font-bold">
              This content comes from the Studio Ghibli API
            </p>
          </div>
          <div>
            <h1 className="font-bold text-xl pb-2">Links to sources below</h1>
            <div className="flex space-x-2">
              <a href="https://github.com/yorch-JMG/ghibli-page">
                <button className="bg-black text-white p-3 rounded-md">
                  Github repo
                </button>
              </a>
              <a href="https://ghibliapi.herokuapp.com/#">
                <button className="border p-3 rounded-md">
                  Studio Ghibli API
                </button>
              </a>
            </div>
          </div>
					<div className='lg:mx-auto'>
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
					</div>
        </div>
      </div>
    </footer>
  );
};
