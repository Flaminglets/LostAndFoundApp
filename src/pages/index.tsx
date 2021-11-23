import styles from '../styles/Home.module.sass'
import Footer from '../components/footer';
import Homepage from '../components/homepage';

export default function Home() {
    return (
        <div className={styles.home}>
        <Homepage/>
        <Footer/>
        </div>
    );
};
