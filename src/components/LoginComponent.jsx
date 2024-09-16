import { useState } from "react";
import { CiMobile3 } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { TiArrowLeft } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoadingSpinner } from "./LoadingSpinner";
import { useCookies } from "react-cookie";
import { NormalHeader } from "./NormalHeader";
export function LoginComponent() {
    const navigate = useNavigate();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state
    const [cookies,setCookie,removeCookie] = useCookies();

    const handelSubmitDetails = async () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (Email !== "" && Password !== "") {
            if (Email.match(emailRegex)) {
                setLoading(true); // Set loading to true when starting the request

                try {
                    await axios({
                        method: "post",
                        url: "https://videosubmission-backend-1.onrender.com/auth/user/signin",
                        data: { email: Email, password: Password },
                    }).then((res) => {
                        // console.log("TokenId======",res.data.token)
                        setCookie("tokenId",res.data.token,{expires:new Date('2025-01-01 23:22:33')})
                    });
                    navigate("/");
                } catch (err) {
                    setError(err.response?.data?.message || 'SignIn failed');
                } finally {
                    setLoading(false); // Set loading to false when request is completed
                }
            } else {
                setError("Please provide a valid Gmail address")
            }
        } else {
            setError("Please provide both Fields Email and Password")
        }
    }

    return (
        <>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div>
                    <NormalHeader/>
                    <div className="bg-white py-20">
                    <div className="w-[90%] md:w-[30%] mx-auto shadow-md p-10">
                        <div className="text-center mb-4">
                            <h2 className="font-bold text-2xl">Welcome Back</h2>
                            <p className="font-medium">Enter Your Login Details</p>
                        </div>
                        <div>
                            <dl className="space-y-3">
                                <dd>
                                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} className="border focus:outline-none p-2 w-full font-medium rounded-md placeholder:text-sm" placeholder="Enter Email / Mobile" />
                                </dd>
                                <dd>
                                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} className="border focus:outline-none p-2 w-full font-medium rounded-md placeholder:text-sm" placeholder="Enter Password" />
                                </dd>
                            </dl>
                            <div>
                                <div className="mt-1">
                                    <Link to="/forgot" className="text-sm font-medium text-red-600">ForgetPassword</Link>
                                </div>
                                <Link >
                                    <button onClick={handelSubmitDetails} className="bg-blue-600 w-full p-1.5 rounded text-white font-semibold mt-3">Login</button>
                                </Link>

                                <p className="text-sm font-semibold text-start mt-2 text-orange-600">{error}</p>
                            </div>
                            {/* <div className="mt-6 mb-4 relative">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500"> Or Sign in with </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <button className="border w-full flex items-center justify-center gap-1 p-1.5 rounded-md">
                                    <FcGoogle className="text-2xl" /> <h4 className="font-medium">Google</h4>
                                </button>
                                <Link to="/mobile">
                                    <button className="border w-full flex items-center justify-center gap-1 p-1.5 rounded-md">
                                        <CiMobile3 className="text-2xl" /> <h4 className="font-medium">Mobile</h4>
                                    </button>
                                </Link>
                            </div> */}
                            <div className="mt-3 text-center">
                                <button>Don't have an account? <Link to="/signup" className="font-semibold">SignUp</Link></button>
                            </div>
                            <div className="mt-1 text-center">
                                <Link to="/" className="flex items-center justify-center gap-2 font-medium text-sm">
                                    <TiArrowLeft className="text-xl" /><span>Back To Home</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            )}
        </>
    )
}