/*
By Yoonseo @Flaminglets
this file contains function that tells user to login first
and prevents from user to access certian pages without logging in
*/

import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 730,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

// button style
const FlamingoEditButton = styled(Button)({
    "&:hover": {
        backgroundColor: "#B0B7AB"
    },
})

// gives user message to login to access this page
// provides button that redirects to login page
export default function NotLoggedIn() {
    const router = useRouter();

    return (
        <div className="no_session">
            <div className="user_backcolor"></div>
            <h1>You are not logged in</h1>
            <h1>Please log in first</h1>
            <p>Click the button to go to login page</p>
            <FlamingoEditButton size="small" variant="contained" className="user_card_button user_card_button_edit" 
                sx={{[theme.breakpoints.down('sm')]: {padding: "1vw", fontSize: "2vw", height: "6vw", width: "15vw"}, backgroundColor: "#D2D4C8", color:"black", height: "2rem", width: "5rem"}}
                onClick={() => (router.push("/loginregister"))}>
                Log In
            </FlamingoEditButton>
        </div>
    )
}