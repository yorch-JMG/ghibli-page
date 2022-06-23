import {NextPage} from 'next';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';

const FourOnFour: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="h-full">
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold">404</h1>
					<div className='text-xl font-black'>
						<h3>Page not found!</h3>
						<h3>Go back home...</h3>
					</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FourOnFour;
