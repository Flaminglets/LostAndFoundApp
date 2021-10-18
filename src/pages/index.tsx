import styles from '../styles/Home.module.css'
import Router from 'next/dist/server/router';
import { useRouter } from 'next/router';




export default function Home() {


  const router = useRouter();

  const goLoginPage= () => {
    router.push('/loginregister');
  };


  return (
    <div className={styles.home}>
      <h1>Welcome to lost and found app! </h1>
      <div>
        <p>
          Please press below to enter the website
        </p>

        <button className="handlenextpage" onClick={goLoginPage}> login/register </button>
      </div>
    </div>
  );
};
