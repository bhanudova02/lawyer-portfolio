import { TiArrowLeft } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { LoadingSpinner } from "./LoadingSpinner";
import { NormalHeader } from "./NormalHeader";

export function VerifySignUp() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Otp, setOtp] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setErrors] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (Email !== "" && Otp !== "" && Password !== "") {
      if (Email.match(emailRegex)) {
        if (Password.length > 6) {
          setLoading(true); // Set loading to true when starting the request
          try {
            await axios.post("https://videosubmission-backend-1.onrender.com/auth/user/verify", {
              email: Email,
              otp: Otp,
              password: Password,
            }).then((res) => {
              console.log(res.data)
            });
            navigate("/login");
          } catch (err) {
            setErrors(err.response?.data?.message || 'Verification failed');
          } finally {
            setLoading(false); // Set loading to false when request is completed
          }
        } else {
          setErrors("Password must be at least 6 characters");
        }
      } else {
        setErrors("Please provide a valid Gmail address");
      }
    } else {
      setErrors("Please fill in all the details");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission behavior
      handleSubmit();
    }
  };

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
                <h2 className="font-bold text-2xl">Sign Up</h2>
                <p className="font-medium">Verifying SignUp Details</p>
              </div>
              <div>
                <dl className="space-y-2">
                  <dd>
                    <input
                      type="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="border focus:outline-none p-2 w-full font-medium rounded-md placeholder:text-sm"
                      placeholder="Enter Email Address"
                    />
                  </dd>
                  <dd>
                    <input
                      type="text"
                      required
                      onChange={(e) => setOtp(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="border focus:outline-none p-2 w-full font-medium rounded-md placeholder:text-sm"
                      placeholder="Enter OTP"
                    />
                  </dd>
                  <dd>
                    <input
                      type="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="border focus:outline-none p-2 w-full font-medium rounded-md placeholder:text-sm"
                      placeholder="Enter Password"
                    />
                  </dd>
                </dl>
                <button
                  onClick={handleSubmit}
                  className="bg-lime-600 w-full p-1.5 rounded text-white font-semibold mt-3"
                >
                  Confirm SignUp
                </button>
                <p className="text-red-500 font-medium text-sm mt-1">{error}</p>
                <div className="mt-4 text-center">
                  <Link
                    to="/signup"
                    className="flex items-center justify-center gap-2 font-medium text-sm"
                  >
                    <TiArrowLeft className="text-xl" />
                    <span>Back To Sign Up</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
