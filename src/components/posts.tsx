import PostCard from './cards';

export default function Posts(props) {
    return (
        <div>
            <div className="home_content">
                {props.props.posts.reverse().map(
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
        </div>
        
    );
};
