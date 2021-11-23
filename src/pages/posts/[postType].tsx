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
                {
                    props.posts.map(
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

    return {
        props : {
            posts
        }
    }
}