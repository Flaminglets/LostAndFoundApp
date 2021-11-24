import NotLoggedIn from '../../components/notLoggedIn';
import {useSession} from 'next-auth/client';
import UpdatePost from '../../components/updatepost/upadatePost';

export default function UpdatePostPage({props}) {
    const [session] = useSession();

    return (
        <div>
            {!session && (
                <>
                <NotLoggedIn/>
                </>
            )}
            {session && (
                <>
                <UpdatePost
                    id={props.post.id}
                    type={props.post.type}
                    date={props.post.date}
                    time={props.post.time}
                    location={props.post.location}
                    lostFname={props.post.lostFname}
                    lostLname={props.post.lostLname}
                    gender={props.post.gender}
                    otherGender={props.post.otherGender}
                    age={props.post.age}
                    weight={props.post.weight}
                    height={props.post.height}
                    eyecolor={props.post.eyecolor}
                    additional={props.post.additional}
                    image={props.post.image}
                    userFname={props.post.userFname}
                    userLname={props.post.userLname}
                    phoneNum={props.post.phoneNum}
                    email={props.post.email}
                />
                </>
            )}
        </div>
    )
}

UpdatePostPage.getInitialProps = async (ctx) => {
    // resources: https://www.youtube.com/watch?v=Os3JZc2CtwY
    const {query} = ctx;

    const response = await fetch('http://localhost:3000/api/updatePost/' + query.updatePostID);
    const postdata = await response.json()

    const post = {
        id: postdata._id,
        type: postdata.type || null,
        date: postdata.date || null,
        time: postdata.time || null,
        location: postdata.location || null,
        lostFname: postdata.lostFname || null,
        lostLname: postdata.lostLname || null,
        gender: postdata.gender || null,
        otherGender: postdata.otherGender || null,
        age: postdata.age || null,
        weight: postdata.weight || null,
        height: postdata.height || null,
        eyecolor: postdata.eyecolor || null,
        additional: postdata.additional || null,
        image: postdata.image || null,
        userFname: postdata.userFname || null,
        userLname: postdata.userLname || null,
        phoneNum: postdata.phoneNum || null,
        email: postdata.email || null
    }

    return {
        props : {
            post
        }
    }
}