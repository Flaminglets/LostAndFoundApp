import styles from '../styles/Home.module.sass'
import Footer from '../components/footer';
import Homepage from '../components/homepage';
// import { getAddPosts } from "../../lib/backend/database";
import { getAddPosts } from '../../lib/backend/database';


export default function Home() {
    return (
        <div className={styles.home}>
        <Homepage/>
        <Footer/>
        </div>
    );
};

export async function getServerSideProps() {
    const postdata = await getAddPosts();
    console.log('postdata', postdata);
    const posts = postdata.map(
        (post) => {
            return {
                id: post.id.toString(),
                type: post.type,
                date: post.date,
                time: post.time,
                location: post.location,
                lostFname: post.lostFname,
                lostLname: post.lostLname,
                gender: post.gender,
                otherGender: post.otherGender || null,
                age: post.age,
                weight: post.weight,
                height: post.height,
                eyecolor: post.eyecolor,
                ethnicity: post.ethnicity || null,
                additional: post.additional,
                image: post.image || null,
                userFname: post.userFname,
                userLname: post.userLname,
                phoneNum: post.phoneNum,
                email: post.email
            };
        }
    )

    return {
        props : {
            posts
        }
    }
}
