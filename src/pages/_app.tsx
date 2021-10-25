import '../styles/global.css';
import '../styles/loginregister.css';
import '../styles/headerfooter.sass';
import '../styles/homepage.sass';
import '../styles/userpage.sass';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}