import '../styles/global.css';
import '../styles/loginregister.sass';
import '../styles/headerfooter.sass';
import '../styles/homepage.sass';
import '../styles/userpage.sass';
import '../styles/newpost.sass';
import Header from "../components/header";
import { useState } from "react";


import { Provider } from 'next-auth/client'

// This default export is required in a new `pages/_app.js` file.
export default function App ({ Component, pageProps }) {
    // const [type, setType] = useState('');
    // const handlePageData = (newType) => {setType(newType); console.log("data type: ", type)}
    return (
        <Provider session={pageProps.session}>
        <Header
            // handlePageData={handlePageData}
        />
        <Component {...pageProps} />
        </Provider>
    )
}