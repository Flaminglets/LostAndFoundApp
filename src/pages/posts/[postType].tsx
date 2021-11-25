import Footer from '../../components/footer';
import Pagination from '@mui/material/Pagination';
import PostCard from '../../components/cards';

export default function Posts({props}) {
    return (
        <div>
            <div className="posts_div">
                <h1 onClick={() => console.log(props)}>test</h1>
            </div>
            <div className="home_content">
                {props.posts.filter((posts) => {
                    if (props.search == "") {
                        return posts
                    } else if (
                        posts.lostFname.toLowerCase().includes(props.search.toLowerCase()) ||
                        posts.location.toLowerCase().includes(props.search.toLowerCase())) {
                        return posts
                    }
                }).reverse().map(
                        (post) => {
                            return (
                                <PostCard 
                                    id={post.id}
                                    type={post.type}
                                    date={post.date}
                                    time={post.time}
                                    location={post.location}
                                    lostFname={post.lostFname}
                                    lostLname={post.lostLname}
                                    gender={post.gender}
                                    otherGender={post.otherGender}
                                    age={post.age}
                                    weight={post.weight}
                                    height={post.height}
                                    eyecolor={post.eyecolor}
                                    additional={post.additional}
                                    image={post.image}
                                    userFname={post.userFname}
                                    userLname={post.userLname}
                                    phoneNum={post.phoneNum}
                                    email={post.email}
                                />  
                            )
                        }
                    )
                }
            </div>
            <div className="home_pagination_div">
                <Pagination count={5} shape="rounded" className="home_pagination"/>
            </div>
            <Footer/>
        </div>
        
    );
};

Posts.getInitialProps = async (ctx) => {
    // resources: https://www.youtube.com/watch?v=Os3JZc2CtwY
    const {query} = ctx;

    if(query.postType === "all") {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        const response = await fetch('http://localhost:3000/api/post', requestOptions);
        const postdata = await response.json()

        const posts = postdata.map(
            (post) => {
                return {
                    id: post._id,
                    type: post.type || null,
                    date: post.date || null,
                    time: post.time || null,
                    location: post.location || null,
                    lostFname: post.lostFname || null,
                    lostLname: post.lostLname || null,
                    gender: post.gender || null,
                    otherGender: post.otherGender || null,
                    age: post.age || null,
                    weight: post.weight || null,
                    height: post.height || null,
                    eyecolor: post.eyecolor || null,
                    additional: post.additional || null,
                    image: post.image || null,
                    userFname: post.userFname || null,
                    userLname: post.userLname || null,
                    phoneNum: post.phoneNum || null,
                    email: post.email || null
                };
            }
        )

        const search = ""

        return {
            props : {
                posts,
                search
            }
        }
    }

    else if(query.postType === 'pet' || query.postType === 'person') {
        const response = await fetch('http://localhost:3000/api/typePost/' + query.postType);
        const postdata = await response.json()

        const posts = postdata.map(
            (post) => {
                return {
                    id: post._id,
                    type: post.type || null,
                    date: post.date || null,
                    time: post.time || null,
                    location: post.location || null,
                    lostFname: post.lostFname || null,
                    lostLname: post.lostLname || null,
                    gender: post.gender || null,
                    otherGender: post.otherGender || null,
                    age: post.age || null,
                    weight: post.weight || null,
                    height: post.height || null,
                    eyecolor: post.eyecolor || null,
                    additional: post.additional || null,
                    image: post.image || null,
                    userFname: post.userFname || null,
                    userLname: post.userLname || null,
                    phoneNum: post.phoneNum || null,
                    email: post.email || null
                };
            }
        )

        const search = ""

        return {
            props : {
                posts,
                search
            }
        }
    }
    
    else {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        const response = await fetch('http://localhost:3000/api/post', requestOptions);
        const postdata = await response.json()

        const posts = postdata.map(
            (post) => {
                return {
                    id: post._id,
                    type: post.type || null,
                    date: post.date || null,
                    time: post.time || null,
                    location: post.location || null,
                    lostFname: post.lostFname || null,
                    lostLname: post.lostLname || null,
                    gender: post.gender || null,
                    otherGender: post.otherGender || null,
                    age: post.age || null,
                    weight: post.weight || null,
                    height: post.height || null,
                    eyecolor: post.eyecolor || null,
                    additional: post.additional || null,
                    image: post.image || null,
                    userFname: post.userFname || null,
                    userLname: post.userLname || null,
                    phoneNum: post.phoneNum || null,
                    email: post.email || null
                };
            }
        )

        const search = query.postType

        return {
            props : {
                posts,
                search
            }
        }
    }
}