import React from 'react';
import AxiosInstance from "../helpers/axiosInstance";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

import { toast, ToastContainer } from "react-toastify";
import TransitionCard from "../components/TransitionCard";
import GradientCard from "../components/gradientCard";
const GenRoute = () => {
    const [email, setEmail] = React.useState('');
    const [link, setLink] = React.useState({})
    function genRoute(e) {
        // console.log(data)
        e.preventDefault();

        const tok = 'eyJhbGciOiJIUzI1NiJ9.OTMzODQuNjU5NzA5NzczNzcnQmxhY2tSb3Nlc2FuZFZpb2xlbnRXYXRlcnMxMjQyNDQyJFlSOFI0TktVVkVOSk5Mb3N0SW4xODJVMzhVMjhnd3J5aWtrbXouTWtudWhxdWhoZXRid2VpdWR2QVZRR0VZR0JCQmJld2d5dzQzODc1eTUzMDk4am5qdm5kZmg4cjh5OTh1eURJdmluZVdhdGVyc3p6Jw.jV0BCPe2jtlW5N5-WPuikEbao9l-s3sIbadbQg_5E-c'
        if (email.length > 2) {
            AxiosInstance.post('/users/rd/gen/ln', { email }, {
                headers: {
                    authorization: tok
                }
            })
                .then(res => {
                    console.log(res.data.link)
                    setLink(res.data.link);
                    toast('☺ Successfully Generated');
                    setEmail('')
                })
                .catch(err => {
                    console.log(err)
                    toast.error('🤨 Sorry Try again')
                });
        }
        else {
            toast.error('🤨 Please Fill the email Field and Try again')
        }
    }
    return (
        <TransitionCard>
            <Navigation />
            <ToastContainer />
            <GradientCard >
                <div className="center-container-form" >
                    <div className='link_'>
                        <h3 className='h4 centerText toUpper' >Here is for testing Route Generation</h3>

                    </div>
                    <form onSubmit={genRoute}>
                        {
                            link?.hasOwnProperty('token') ? <p className='h6' style={{ wordWrap: 'break-word' }}>https://rdland.herokuapp.com/auth/tokenVerification/{link._id}/{link.token}</p> : null
                        }
                        <div className="form--control">
                            <input value={email} onChange={e => setEmail(e.target.value)} name={'email'} className="form--input" placeholder='Enter Email' />

                        </div>
                        <button className="borderedBtn borderedBtn-dark mgT2">GO</button>

                    </form>
                </div>
            </GradientCard>

            <Footer />
        </TransitionCard>
    );
};

export default GenRoute;