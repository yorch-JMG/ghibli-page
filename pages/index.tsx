import {NextPage} from 'next';
import {Header} from '../components/Header';
import { MovieSection } from '../components/MoviesSection';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
			<MovieSection/>
    </div>
  );
};

export default Home;
