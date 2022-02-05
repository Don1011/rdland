import React from 'react';
import axiosInstance from "../../helpers/axiosInstance";
import {toast, ToastContainer} from "react-toastify";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import {useLocation,useNavigate} from "react-router-dom";
import ErrorComponent from "../../components/errorComponent";

const Terms = () => {
const location = useLocation();
const navigate = useNavigate();
    const [prevForm,setPrevForm] = React.useState({});
    const [terms,setTerms] = React.useState(false);
    const [validAge,setValidAge] = React.useState(false);
    const [emailNotifications,setEmailNotifications] = React.useState(false);
    function submitForm(e) {
        e.preventDefault();
        const formData = {
            ...prevForm,
            emailNotifications,
            terms
        }
        if (validAge===true){
        console.log(formData);
        axiosInstance.post('/users/auth/reg',formData)
            .then(res=>{

                toast('😊 Successful Please check your email');
                setTimeout(()=>{
                    navigate('/success',{replace:true,state:{
                        msg: 'Check your email & press confirm email to finish the job.'
                        }})
                },5000)
            })
            .catch(err=>{
                toast.error('ERROR TRY AGAIN')
            })
                 }
        else if (validAge===false) {
            toast.error('Please Make Sure you are of a legal Age😑😐')
        }
    }
    React.useEffect(()=>{
        setPrevForm(location.state);
    },[location,setPrevForm])
    return (
      <>
          {
              prevForm?.hasOwnProperty('username')?
                  <div>
                      <Navigation/>


                      <div className='gradientCard'>
                          <ToastContainer/>
                           <div className="center-container-60" style={{height:'55vh'}}>
                               <h2 className="h5">Final Requirements</h2>
                               <form className='terms_form' onSubmit={submitForm}>
                                   <fieldset>
                                       <input id='ageValid' type={'checkbox'} onChange={(e)=>setValidAge(!validAge)}/>
                                       <label htmlFor={'ageValid'} className='h5'> I am 16 years and Above</label>

                                   </fieldset>
                                   <fieldset>
                                       <input id='terms' type={'checkbox'} onChange={(e)=>setTerms(!terms)}/>
                                       <label htmlFor={'terms'} className='h5'> I Accept Terms and conditions </label>

                                   </fieldset>
                                   <fieldset>
                                       <input type={'checkbox'} id='emailNotifications' onChange={(e)=>setEmailNotifications(!emailNotifications)}/>
                                       <label htmlFor={'emailNotifications'} className='h5'> I want to get Notified on Promotional Offers & Latest worlds</label>

                                   </fieldset>
                                   <button className="borderedBtn borderedBtn-dark mgT2">GO</button>
                                  </form>
                           </div>
                      </div>
                      <Footer/>

                  </div>:<ErrorComponent error={'Sorry Link not Valid'}/>
          }
      </>
    );
};

export default Terms;