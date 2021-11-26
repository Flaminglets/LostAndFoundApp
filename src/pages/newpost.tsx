import { useSession } from 'next-auth/client';
import Footer from '../components/footer';
import NewPost from '../components/newpost/index';
import NotLoggedIn from '../components/notLoggedIn';

export default function newPost () {
    const [session] = useSession();

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