import React from 'react';
import Navigation from "../../components/navigation";
import AuthForm from "./AuthForm";
import Footer from "../../components/footer";

const CustomVerification = () => {
    return (
        <div className=''>
            <Navigation/>

                <AuthForm/>
            <Footer/>


        </div>
    );
};

export default CustomVerification;