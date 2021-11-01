import '../styles/global.css';
import '../styles/loginregister.sass';
import '../styles/headerfooter.sass';
import '../styles/homepage.sass';
import '../styles/userpage.sass';
import '../styles/newpost.sass';

import { Provider } from 'next-auth/client'

// This default export is required in a new `pages/_app.js` file.
export default function App ({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}