import React from 'react';
import AsideImage from '../../assets/Vector.svg';
import {useForm} from "react-hook-form";
import Joi from 'joi';
import axiosInstance from '../../helpers/axiosInstance';
import {useLocation,useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ErrorComponent from "../../components/errorComponent";
import 'react-toastify/dist/ReactToastify.css';
const AuthForm = () => {
    //check or verify route token and id
    const navigate = useNavigate();
    const location = useLocation();
    const {register,handleSubmit,formState:{errors}} = useForm();
    const [displayError,setDisplayError] = React.useState(false);
    const [refId,setRefId] = React.useState('');
    const schema = Joi.object({
        username: Joi.string().required().min(2),
        email:Joi.string().email({tlds:{allow: false}}).required(),
        password:Joi.string().required().min(8).pattern(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/s),
        retypePass:Joi.ref('password')
    })
    function signUp(data) {
      const {error} =  schema.validate(data);
      if (error){
          console.log(error)
      }
      else{
          //sign up logic
          let formData = {
              username:data.username,
              email:data.email,
              password:data.password,
              referralId:refId
          }

          ///push to location terms
          //TODO:set replace to true on production
          toast.success('😁 One More Step to Go')
          navigate('/auth/terms_conditions',{replace:false,state:formData});
      }
    }

    const validateReqToken = React.useCallback(()=>{
        const pathName = location.pathname;
        console.log(pathName)
        axiosInstance.get(`users${pathName}`).then(res=>{
            console.log(res)
            if (res.data.r.active===true){
                setDisplayError(true);
            }
            else {

                console.log(res.data.r._id)
                setRefId(res.data.r._id);
                setDisplayError(false)
            }
        }).catch(err=>{
            console.log(err)
setDisplayError(true)
        })
    },[location])

    React.useEffect(()=>{
       validateReqToken();
    },[validateReqToken])
     function RegForm() {
         return <div className="grid-item2_4">
             <form onSubmit={handleSubmit(signUp)}>
                 <p className="h5">CREATE PROFILE</p>
                 <div className="form--control">
                     <input {...register('username',{required:true,minLength:2})}  className="form--input" placeholder='Username'/>
                 </div>
                 {errors.username?.type==='required'?<p className={'danger h6'}> Required</p>:null}
                 <div className="form--control">
                     <input type={'email'}  {...register('email',{required:true})}  className="form--input" placeholder='Email'/>
                 </div>
                 {errors.email?.type==='required'?<p className={'danger h6'}> Required</p>:null}
                 <div className="form--control">
                     <input type={'password'}  {...register('password',{required:true,minLength:8})}  className="form--input" placeholder='Password'/>
                 </div>
                 {errors.password?.type==='required'?<p className={'danger h6'}> Required</p>:null}
                 <div className="form--control">
                     <input type={'password'}  {...register('retypePass',{required:true,minLength:8})}  className="form--input" placeholder='Confirm Password'/>
                 </div>
                 {errors.retypePass?.type==='required'?<p className={'danger h6'}> Required</p>:null}
                 <button type = "submit" role = "submit" className="borderedBtn borderedBtn-dark mgT2">GO</button>
             </form>
         </div>
     }
    return (
        <>
        {
            displayError?<ErrorComponent error={'Sorry Link not Valid'}/>:(

                <div className='gradientCard'>
                    <ToastContainer/>
                    <div className="center-container-60 grid">
                        <img src={AsideImage} alt='Vector Art' className="grid-item2_4 authSideImg rt-img-hf"/>
                        <RegForm/>
                    </div>
                </div>
            )
        }</>
    );
};



export default AuthForm;