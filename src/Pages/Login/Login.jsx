import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useAuth } from '../../Hook/useAuth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { SocialLogin } from '../../Components/socialLogin/SocialLogin';

export const Login = () => {
const [disabled,  setDisabled] = useState(true);
const {signIn} = useAuth()
const navigate = useNavigate()
const location = useLocation()

const from = location.state?.from?.pathname || '/';

    useEffect(()=>{
        loadCaptchaEnginge(6);  
    },[])

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(res=>{
          console.log(res.user)
          Swal.fire({
            title: 'user Login successfully.',
            showClass:{
              popup: 'animate_animated animate_fadeInDown'
            },
            hideClass:{
              popup: 'animate_animated animate_fadeOutUp'
            },
        });
        navigate(from, {replace: true});
        })
        .catch(err =>{
          console.log(err.message)
        })
    }

    const handleCaptcha = (e) =>{
      const user_captcha_value = e.target.value;
      console.log(user_captcha_value)
      if (validateCaptcha(user_captcha_value) == true) {
        setDisabled(false)
    }

    else {
        alert('Captcha Does Not Match');
    }

    }

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input onBlur={handleCaptcha} type="text" name="captcha" placeholder="enter captcha" className="input input-bordered" required />
      
        </div>
        <div className="form-control mt-6">
          <input disabled={disabled} type="submit" value="Login" className="btn btn-primary"/>
        </div>
      </form>
      <SocialLogin />
      <p className='px-6'><small>New here? <Link to="/signUp">Create an Account</Link> </small></p>
    </div>
  </div>
</div>
  )
}
