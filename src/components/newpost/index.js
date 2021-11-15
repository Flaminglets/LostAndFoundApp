import { useState, createContext, useContext } from 'react';
import FirstPage from "./mobileFirstPage";
import SecondPage from './mobileSecondPage';
import ThirdPage from './mobileThirdPage';
import FourthPage from './mobileFourthPage';
import FifthPage from './mobileFifthPage';
import SixthPage from './mobileSixthPage';

// export const FormContext = createContext();

export default function NewPostMobile() {
    const [page, setPage] = useState(1);
    const [data, setData] = useState({});

    // setData({
    //     type: "",
    //     date: "",
    //     time: "",
    //     location: "",
    //     lostFname: "",
    //     lostLname: "",
    //     gender: "",
    //     otherGender: "",
    //     age: "",
    //     weight: "",
    //     height: "",
    //     eyecolor: "",
    //     ethnicity: "",
    //     additional: "",
    //     userFname: "",
    //     userLname: "",
    //     phoneNum: "",
    //     email: ""
    // })

    // const setFormValues = (values) => {
    //     setData((prevValues) => ({
    //       ...prevValues,
    //       ...values,
    //     }));
    //   };
    
    const newdata = {
        type: "", // data.type,
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

    const handlePageData = (newData) => {
        setData({...data, ...newData});
        data
    }

    const getData = () => data.type

    const handleNextClick = () => {setPage((currentStep) => currentStep + 1); console.log("data is ", data);};
    const handlePrevClick = () => {setPage((currentStep) => currentStep - 1); console.log("data is ", data);}
    const handleSubmitClick = () => {

    }

    return(
        <div className="new_div">
            <div className="newpost">
                <p className="newpost_title">Fill out the form to upload the post</p>
                {/* <FormContext.Provider value={{ data, setFormValues }}> */}
                {page == 1 && (
                    <>
                    <FirstPage
                        handlePageData={handlePageData}
                        handleNextClick={handleNextClick}
                        // setFormValues={setFormValues}
                        getData={getData}
                    />
                    </>
                )}
                {page == 2 && (
                    <>
                    <SecondPage
                        handlePageData={handlePageData}
                        handleNextClick={handleNextClick}
                        handlePrevClick={handlePrevClick}
                    />
                    </>
                )}
                {page == 3 && (
                    <>
                    <ThirdPage
                        handlePageData={handlePageData}
                        handleNextClick={handleNextClick}
                        handlePrevClick={handlePrevClick}
                    />
                    </>
                )}
                {page == 4 && (
                    <>
                    <FourthPage
                        handlePageData={handlePageData}
                        handleNextClick={handleNextClick}
                        handlePrevClick={handlePrevClick}
                    />
                    </>
                )}
                {page == 5 && (
                    <>
                    <FifthPage
                        handlePageData={handlePageData}
                        handleNextClick={handleNextClick}
                        handlePrevClick={handlePrevClick}
                    />
                    </>
                )}
                {page == 6 && (
                    <>
                    <SixthPage
                        handlePageData={handlePageData}
                        handleSubmitClick={handleSubmitClick}
                        handlePrevClick={handlePrevClick}
                    />
                    </>
                )}
                {/* </FormContext.Provider> */}
            </div>
        </div>
    )
}

// export const useFormData = () => useContext(FormContext);