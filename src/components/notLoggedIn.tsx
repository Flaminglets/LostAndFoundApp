import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router'

const FlamingoEditButton = styled(Button)({
    '&:hover': {
        backgroundColor: '#B0B7AB'
    },
})

export default function NotLoggedIn() {
    const router = useRouter();

    return (
        <div className="no_session">
            <div className="user_backcolor"></div>
            <h1>You are not logged in</h1>
            <h1>Please log in first</h1>
            <p>click the button to go to login page</p>
            <FlamingoEditButton size="small" variant="contained" className="user_card_button user_card_button_edit" onClick={() => (router.push('/loginregister'))}>
                Log In
            </FlamingoEditButton>
        </div>
    )
}