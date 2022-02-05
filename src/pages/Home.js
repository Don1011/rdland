import React from 'react';
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import GradientCard from "../components/gradientCard";
import { useForm } from "react-hook-form";
import AxiosInstance from "../helpers/axiosInstance";

import { toast, ToastContainer } from "react-toastify";
const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function addToMailing(data) {

        AxiosInstance.post('https://53f0-41-242-52-81.ngrok.io/api/users/addToMailing', data)
            .then((res) => {
                toast('YOU’RE ON THE WAITING LIST!WE’LL SEND YOU A CODE NEXT TIME. KEEP UP WITH US FOR FUTURE EVENTS.');

            })
            .catch(err => {
                toast.error('Please Try Again Later or You May already be on the waiting list!')
                // console.log(err)
            })
    }

    function MailList() {
        return <form className={'centerText'} onSubmit={handleSubmit(addToMailing)}>

            <div className="form--control">
                <input {...register('email', { required: true, minLength: 2 })} name={'email'} className="form--input" placeholder='Enter Email' />
                {errors?.email ? <p>{errors.email.type}</p> : null}
            </div>
            <button className="borderedBtn borderedBtn-dark mgT2">GET CODE</button>

        </form>
    }

    return (
        <div>
            <Navigation />
            <GradientCard>
                <ToastContainer />
                <div className="center-container-form">
                    <div className='link_'>
                        <h3 className='h4 centerText toUpper' >Sorry, we’re invite only at this time.</h3>
                        <h3 className='h4 centerText toUpper' >Want to get a code for the future?</h3>

                    </div>
                    <MailList />
                </div>
            </GradientCard>

            <Footer />
        </div>
    );
};

export default Home;