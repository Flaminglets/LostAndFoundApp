import '../styles/global.css';
import '../styles/loginregister.sass';
import '../styles/headerfooter.sass';
import '../styles/homepage.sass';
import '../styles/userpage.sass';
import '../styles/newpost.sass';
import Header from "../components/header";
import React from "react";
import { Provider } from 'next-auth/client'
import PropTypes from 'prop-types';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

// resource: https://mui.com/components/app-bar/#back-to-top
// scroll to top button function
function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
        "#top",
        );

        if (anchor) {
        anchor.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        }
    };

    return (
        <Zoom in={trigger}>
        <Box
            onClick={handleClick}
            role="presentation"
            sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
            {children}
        </Box>
        </Zoom>
    );
}
  
ScrollTop.propTypes = {
    children: PropTypes.element.isRequired
};

// This default export is required in a new `pages/_app.js` file.
export default function App ({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
        <Header/>
        <Component {...pageProps} />
        {/* resource: https://mui.com/components/app-bar/#back-to-top */}
        {/* scroll to top button */}
        <ScrollTop {...pageProps}>
            <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>
        </Provider>
    )
}