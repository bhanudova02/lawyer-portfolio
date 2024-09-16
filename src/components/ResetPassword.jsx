import axios from "axios";
import { useState } from "react";
import { CiMobile3 } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { TiArrowLeft } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { LoadingSpinner } from "./LoadingSpinner";
import { NormalHeader } from "./NormalHeader";

export function ResetPassword() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [Email, setEmail] = useState('');
    const [Otp, setOtp] = useState('');
    const [Password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state

    const handelResetPassword = async () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (Email !== "" && Otp !== "" && Password !== "") {
            if (Email.match(emailRegex)) {
                if (Password.length > 6) {
                    setLoading(true); // Set loading to true when starting the request
                    try {
                        await axios({
                            method: "post",
                            url: "https://videosubmission-backend-1.onrender.com/auth/user/reset-password",
                            data: { email: Email, otp: Otp, newPassword: Password },
                        }).then((res) => {
                            console.log(res.data)
                        });
                        navigate("/login");
                    } catch (err) {
                        setError(err.response?.data?.message || 'Process failed');
                    } finally {
                        setLoading(false); // Set loading to false when request is completed
                    }
                } else {
                    setError("Password must be at least 6 characters")
                }
            } else {
                setError("Please Provide Valid Email Address")
            }
        } else {
            setError("Please provide All Fields Information.")
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
                                <h2 className="font-bold text-2xl">Reset Password</h2>
                            </div>
                            <div>
                                <dl className="space-y-3">
                                    <dd>
                                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} className="border focus:outline-none p-2 w-full font-medium rounded-md placeholder:text-sm" placeholder="Enter Email Address" />
                                    </dd>
                                    <dd>
                                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} className="border focus:outline-none p-2 w-full font-medium rounded-md placeholder:text-sm" placeholder="Enter New Password" />
                                    </dd>
                                    <dd>
                                        <input type="text" onChange={(e) => { setOtp(e.target.value) }} className="border focus:outline-none p-2 w-full font-medium rounded-md placeholder:text-sm" placeholder="Enter OTP" />
                                    </dd>
                                </dl>
                                <div>
                                    <button onClick={handelResetPassword} className="bg-blue-600 w-full p-1.5 rounded text-white font-semibold mt-3">Reset Password</button>
                                    <p className='text-red-500 font-medium text-sm mt-1'>{error}</p>

                                    <div className="mt-4 text-center">
                                        <Link to="/forgot" className="flex items-center justify-center gap-2 font-medium text-sm">
                                            <TiArrowLeft className="text-xl" /><span>Back To Forgot</span>
                                        </Link>
                                    </div>

                                    {/* <p className="text-sm font-semibold text-center mt-2 text-orange-800">Invalid User Details</p> */}
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
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}