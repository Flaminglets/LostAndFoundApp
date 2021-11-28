/*
By Harman @Flaminglets
this page displays a post detail information
*/

import PopUp from '../../components/popup';

export default function DetailPage({userData}) {
    return (
        <div>
            <PopUp data={userData} />
        </div>
    )
}

// getting one post by post id from database
// @params: post id
// @return: a post get by post id
DetailPage.getInitialProps = async (ctx) => {
    const { query } = ctx;
    const response = await fetch("http://localhost:3000/api/updatePost/" + query.detailpost);   
    const data = await response.json();
    return{userData: data}
}
