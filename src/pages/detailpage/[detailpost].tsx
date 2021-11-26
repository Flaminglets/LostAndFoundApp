import { useRouter } from "next/router";
import PopUp from '../../components/popup';
export default function DetailPage({userData}) {
    // get details based off user id
    const { query } = useRouter();
    
    console.log(userData);

    return (
        <div>
            <PopUp data={userData} />
        </div>
    )
}

DetailPage.getInitialProps = async (ctx) => {
    const { query } = ctx;
    const response = await fetch("http://localhost:3000/api/updatePost/" + query.detailpost);   
    const data = await response.json();
    return{userData: data}
}
