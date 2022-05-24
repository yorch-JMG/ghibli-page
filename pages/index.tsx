import {NextPage} from 'next';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';
import {MovieSection} from '../components/MoviesSection';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <MovieSection />
      <Footer />
    </div>
  );
};

export default Home;
