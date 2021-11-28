/*
Flaminglets
Yoonseo
this file contains update post form function
gets a post information and after user update data that need to be updated,
and update the post data in the database
*/

import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import FirstPage from '../newpost/mobile/mobileFirstPage';
import SecondPage from '../newpost/mobile/mobileSecondPage';
import ThirdPage from '../newpost/mobile/mobileThirdPage';
import FourthPage from '../newpost/mobile/mobileFourthPage';
import FifthPage from '../newpost/mobile/mobileFifthPage';
import SixthPage from '../newpost/mobile/mobileSixthPage';
import WebFirstPage from '../newpost/web/webFirstPage';
import WebSecondPage from '../newpost/web/webSecondPage';
import LastPage from './lastPage';


export default function UpdatePost(props) {
    const [session] = useSession();
    const router = useRouter();
    const [page, setPage] = useState(1);
    const [data, setData] = useState(props);

    const handlePageData = (newData) => {setData({...data, ...newData});}

    const handleNextClick = () => {
        setPage((currentStep) => currentStep + 1); 
    };
    const handlePrevClick = () => {setPage((currentStep) => currentStep - 1);}
    const handleWebPrevClick = () => {setPage(1);}
    const handleSubmitClick = () => {setPage(10);}
    const handleSubmitPrevClick = () => {setPage(6);}

    const handleFinalClick = async () => {
        const postID = props.id
        const newData = {
            type: data.type,
            date: data.date,
            time: data.time,
            location: data.location,
            lostFname: data.lostFname,
            lostLname: data.lostLname,
            gender: data.gender,
            otherGender: data.otherGender,
            age: data.age,
            weight: data.weight,
            height: data.height,
            eyecolor: data.eyecolor,
            additional: data.additional,
            image: data.image,
            userFname: data.userFname,
            userLname: data.userLname,
            phoneNum: data.phoneNum,
            email: data.email
        }
        const myData = {
            postID,
            newData
        };

        const body = JSON.stringify(myData);

        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        };

        const response = await fetch("http://localhost:3000/api/post", requestOptions);
        const json = await response.json();
        router.push(`/user/${session.id}`);
    }

    return(
        <div className="new_div">
            <div className="newpost">
                <div className="post_mobile">
                    <p className="newpost_title">Fill out the form to update the post</p>
                    {page == 1 && (
                        <>
                        <FirstPage
                            handlePageData={handlePageData}
                            handleNextClick={handleNextClick}
                            type={data.type}
                        />
                        </>
                    )}
                    {page == 2 && (
                        <>
                        <SecondPage
                            handlePageData={handlePageData}
                            handleNextClick={handleNextClick}
                            handlePrevClick={handlePrevClick}
                            date={data.date}
                            time={data.time}
                        />
                        </>
                    )}
                    {page == 3 && (
                        <>
                        <ThirdPage
                            handlePageData={handlePageData}
                            handleNextClick={handleNextClick}
                            handlePrevClick={handlePrevClick}
                            location={data.location}
                        />
                        </>
                    )}
                    {page == 4 && (
                        <>
                        <FourthPage
                            handlePageData={handlePageData}
                            handleNextClick={handleNextClick}
                            handlePrevClick={handlePrevClick}
                            lostFname={data.lostFname}
                            lostLname={data.lostLname}
                            gender={data.gender}
                            otherGender={data.otherGender}
                            age={data.age}
                            weight={data.weight}
                            height={data.height}
                            eyecolor={data.eyecolor}
                            additional={data.additional}
                        />
                        </>
                    )}
                    {page == 5 && (
                        <>
                        <FifthPage
                            handlePageData={handlePageData}
                            handleNextClick={handleNextClick}
                            handlePrevClick={handlePrevClick}
                            image={data.image}
                        />
                        </>
                    )}
                    {page == 6 && (
                        <>
                        <SixthPage
                            handlePageData={handlePageData}
                            handleSubmitClick={handleSubmitClick}
                            handlePrevClick={handlePrevClick}
                            userFname={data.userFname}
                            userLname={data.userLname}
                            phoneNum={data.phoneNum}
                            email={data.email}
                        />
                        </>
                    )}
                    {page == 10 && (
                        <>
                        <LastPage
                            handlePageData={handlePageData}
                            handleFinalClick={handleFinalClick}
                            handleSubmitPrevClick={handleSubmitPrevClick}
                            type={data.type}
                            date={data.date}
                            time={data.time}
                            location={data.location}
                            lostFname={data.lostFname}
                            lostLname={data.lostLname}
                            gender={data.gender}
                            otherGender={data.otherGender}
                            age={data.age}
                            weight={data.weight}
                            height={data.height}
                            eyecolor={data.eyecolor}
                            additional={data.additional}
                            image={data.image}
                            userFname={data.userFname}
                            userLname={data.userLname}
                            phoneNum={data.phoneNum}
                            email={data.email}
                        />
                        </>
                    )}
                </div>
                <div className="post_web">
                    <p className="newpost_title">Fill out the form to upload the post</p>
                    {page == 1 && (
                        <>
                        <WebFirstPage
                            handlePageData={handlePageData}
                            handleNextClick={handleNextClick}
                            type={data.type}
                            date={data.date}
                            time={data.time}
                            location={data.location}
                            lostFname={data.lostFname}
                            lostLname={data.lostLname}
                            gender={data.gender}
                            otherGender={data.otherGender}
                            age={data.age}
                            weight={data.weight}
                            height={data.height}
                            eyecolor={data.eyecolor}
                            additional={data.additional}
                            image={data.image}
                        />
                        </>
                    )}
                    {page >= 2 && page < 10 && (
                        <>
                        <WebSecondPage
                            handlePageData={handlePageData}
                            handleSubmitClick={handleSubmitClick}
                            handlePrevClick={handleWebPrevClick}
                            userFname={data.userFname}
                            userLname={data.userLname}
                            phoneNum={data.phoneNum}
                            email={data.email}
                        />
                        </>
                    )}
                    {page == 10 && (
                        <>
                        <LastPage
                            handlePageData={handlePageData}
                            handleFinalClick={handleFinalClick}
                            handleSubmitPrevClick={handleSubmitPrevClick}
                            type={data.type}
                            date={data.date}
                            time={data.time}
                            location={data.location}
                            lostFname={data.lostFname}
                            lostLname={data.lostLname}
                            gender={data.gender}
                            otherGender={data.otherGender}
                            age={data.age}
                            weight={data.weight}
                            height={data.height}
                            eyecolor={data.eyecolor}
                            additional={data.additional}
                            image={data.image}
                            userFname={data.userFname}
                            userLname={data.userLname}
                            phoneNum={data.phoneNum}
                            email={data.email}
                            userID={session.id}
                        />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}



