import { useState } from 'react';
import FirstPage from "./mobileFirstPage";
import SecondPage from './mobileSecondPage';
import ThirdPage from './mobileThirdPage';
import FourthPage from './mobileFourthPage';
import FifthPage from './mobileFifthPage';
import SixthPage from './mobileSixthPage';

export default function NewPostMobile() {
    const [page, setPage] = useState(1);
    const [newdata, setData] = useState({});
    
    const data = {
        type: "",
        date: "",
        time: "",
        location: "",
        lostFname: "",
        lostLname: "",
        gender: "",
        otherGender: "",
        age: "",
        weight: "",
        height: "",
        eyecolor: "",
        ethnicity: "",
        additional: "",
        userFname: "",
        userLname: "",
        phoneNum: "",
        email: ""
    }

    // const handleFirstClick = (type) => {
    //     data.type == type;
    //     console.log("firstpage clicked")
    //     setPage("second");
    //     type == data.type
    //     console.log("last type", data);
    // }

    const handleFirstPage = (type) => {
        data.type = type;
        console.log("type", data);
    }

    // const handleSecondClick = (date, time) => {
    //     data.date = date;
    //     data.time = time;
    //     setPage("first");
    // }

    const handleNextClick = () => {setPage((currentStep) => currentStep + 1); console.log("data is ", data);};
    const handlePrevClick = () => setPage((currentStep) => currentStep - 1);
    const handleSubmitClick = () => {

    }

    return(
        <div className="new_div">
            <div className="newpost">
                <p className="newpost_title">Fill out the form to upload the post</p>
                {page == 1 && (
                    <>
                    <FirstPage
                        handleFirstPage={handleFirstPage}
                        handleNextClick={handleNextClick}
                    />
                    </>
                )}
                {page == 2 && (
                    <>
                    <SecondPage
                        handleNextClick={handleNextClick}
                        handlePrevClick={handlePrevClick}
                    />
                    </>
                )}
                {page == 3 && (
                    <>
                    <ThirdPage
                        handleNextClick={handleNextClick}
                        handlePrevClick={handlePrevClick}
                    />
                    </>
                )}
                {page == 4 && (
                    <>
                    <FourthPage
                        handleNextClick={handleNextClick}
                        handlePrevClick={handlePrevClick}
                    />
                    </>
                )}
                {page == 5 && (
                    <>
                    <FifthPage
                        handleNextClick={handleNextClick}
                        handlePrevClick={handlePrevClick}
                    />
                    </>
                )}
                {page == 6 && (
                    <>
                    <SixthPage
                        handleSubmitClick={handleSubmitClick}
                        handlePrevClick={handlePrevClick}
                    />
                    </>
                )}
                
            </div>
        </div>
    )
}