import PopUp from '../../components/popup';

export default function DetailPage({userData}) {
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
