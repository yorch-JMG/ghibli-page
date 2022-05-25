/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: 'https://ghibliapi.herokuapp.com',
  },
  images: {
    domains: [
      'static.wikia.nocookie.net',
      'themoviedb.org',
      'image.tmdb.org',
			'www.themoviedb.org',
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
