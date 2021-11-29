/*
By Yoonseo @Flaminglets
this file contains create new post form function
get post information inputs from user and creates new post data to database
*/

import { useState } from 'react';
import { useSession } from 'next-auth/client';
import FirstPage from './mobile/mobileFirstPage';
import SecondPage from './mobile/mobileSecondPage';
import ThirdPage from './mobile/mobileThirdPage';
import FourthPage from './mobile/mobileFourthPage';
import FifthPage from './mobile/mobileFifthPage';
import SixthPage from './mobile/mobileSixthPage';
import WebFirstPage from './web/webFirstPage';
import WebSecondPage from './web/webSecondPage';
import LastPage from './lastPage';

// @return: create new post page with pages functions
// handle creating new post
export default function NewPost() {
    const [session] = useSession();
    const [page, setPage] = useState(1);
    const [data, setData] = useState({});

    const handlePageData = (newData) => {setData({...data, ...newData});}

    // set page number to switch page functions
    const handleNextClick = () => {setPage((currentStep) => currentStep + 1);}; // go to next page
    const handlePrevClick = () => {setPage((currentStep) => currentStep - 1);} // go to previous page
    const handleWebPrevClick = () => {setPage(1);} // go to previous page for web size window
    const handleSubmitClick = () => {setPage(10);} // go to last page
    const handleSubmitPrevClick = () => {setPage(6);} // go back to form page

    // submit the new post data to the database
    // this is called in lastPage
    const handleFinalClick = async () => {
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
            email: data.email,
            userID: session.id,
        };

        const body = JSON.stringify(newData);

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        };

        const response = await fetch(`${process.env.PUBLIC_URL}/api/post`, requestOptions);
        location.href = "/user";
    }

    return(
        <div className="new_div">
            <div className="newpost">
                {/* mobile size window */}
                <div className="post_mobile">
                    <p className="newpost_title">Fill out the form to create the post</p>
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
                {/* web size window */}
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
                        />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}