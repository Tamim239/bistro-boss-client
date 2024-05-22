import { FaGoogle } from "react-icons/fa6"
import { useAuth } from "../../Hook/useAuth"
import { useAxiosPublic } from "../../Hook/useAxiosPublic";
import { useNavigate } from "react-router-dom";

export const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res=>{
            console.log(res.user)
            const userInfo = {
                name: res.user?.displayName,
                email: res.user?.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
                console.log(res.data)
            })
            navigate('/')
        })
    }
  return (
    <div>
        <div className="divider"></div>
        <div>
            <button onClick={handleGoogleSignIn} className="btn w-full">
            <FaGoogle className="mr-2"/>  Continue with Google
            </button>
        </div>

    </div>
  )
}
