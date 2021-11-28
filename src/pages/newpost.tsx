/*
Flaminglets
Yoonseo
this page is for creating new post
if user is not logged in, it will tell user to login first
if user is logged in, the creating new post page will be shown
*/

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