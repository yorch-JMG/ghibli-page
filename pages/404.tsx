import {NextPage} from 'next';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';

const FourOnFour: NextPage = () => {
  return (
    <div>
      <Header />
				<div className='h-96'>
					<h1>404</h1>
					<h3>Page not found</h3>
					<p>Go back home!</p>
				</div>
      <Footer />
    </div>
  );
};

export default FourOnFour;
