import Header from '../components/header';
import Footer from '../components/footer';
import NewPost_web from '../components/newpost_web';
import NewPost_mobile from '../components/newpost_mobile';

export default function newPost () {

    return (
        <div className="new_div">
            <Header/>
            <div className="post_web">
                <NewPost_web/>
                <Footer/>
            </div>
            <div className="post_mobile">
                <NewPost_mobile/>
            </div>
        </div>
    )
    

}