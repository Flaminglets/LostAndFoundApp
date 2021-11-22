import NotLoggedIn from '../components/notLoggedIn';
import {useSession} from 'next-auth/client';
import UpdatePost from '../components/updatepost/updatePost';

export default function UpdatePostPage() {
    const [session, loadingSession] = useSession();

    return (
        <div>
            {!session && (
                <>
                <NotLoggedIn/>
                </>
            )}
            {session && (
                <>
                <UpdatePost/>
                </>
            )}
        </div>
    )
}