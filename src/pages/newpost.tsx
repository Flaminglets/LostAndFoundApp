import Footer from '../components/footer';
import NewPost from '../components/newpost/index';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';
import {useSession} from 'next-auth/client';
import NotLoggedIn from '../components/notLoggedIn';

const FlamingoEditButton = styled(Button)({
    '&:hover': {
        backgroundColor: '#B0B7AB'
    },
})

export default function newPost () {
    const [session, loadingSession] = useSession();
    const router = useRouter();

    return (
        <div className="new_div">
            {!session && (
                <>
                <NotLoggedIn/>
                </>
            )}
            {session && (
                <>
                <NewPost/>
                </>
            )}
            <Footer/>
        </div>
    )
}