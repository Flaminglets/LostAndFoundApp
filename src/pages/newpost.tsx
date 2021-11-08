import Header from '../components/header';
import Footer from '../components/footer';
import NewPost from '../components/newpost/index';

export default function newPost () {
    return (
        <div className="new_div">
            <Header/>
            <NewPost/>
            <Footer/>
        </div>
    )
}