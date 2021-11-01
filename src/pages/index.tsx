import styles from '../styles/Home.module.sass'
import Header from '../components/header';
import Homepage from '../components/homepage';
import Footer from '../components/footer';

export default function Home() {
    return (
        <div className={styles.home}>
        <Header/>
        <Homepage/>
        <Footer/>
        </div>
        
    );
};
