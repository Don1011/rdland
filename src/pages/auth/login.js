import React from 'react';
import Navigation from "../../components/navigation";
import AuthForm from "./AuthForm";
import Footer from "../../components/footer";

const Login = () => {
    return (
        <div>
            <Navigation/>

            <AuthForm/>
            <Footer/>
        </div>
    );
};

export default Login;