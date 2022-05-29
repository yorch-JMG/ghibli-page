import {NextPage} from 'next';
import Head from 'next/head';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';
import {MovieSection} from '../components/MoviesSection';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ghibli encyclopedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <MovieSection />
      <Footer />
    </div>
  );
};

export default Home;
