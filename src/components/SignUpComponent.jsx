import { useState } from 'react';
import { TiArrowLeft } from 'react-icons/ti';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LoadingSpinner } from './LoadingSpinner'; // Import the LoadingSpinner
import { NormalHeader } from './NormalHeader';

export function SignUpComponent() {
  const navigate = useNavigate();
  const [uname, setUname] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmission = async () => {
    const usernameRegex = /^[A-Za-z]{4}[A-Za-z0-9]*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (uname !== "" && email !== "") {
      if (uname.length >= 4) {
        if (uname.match(usernameRegex)) {
          setLoading(true); // Set loading to true when starting the request
          try {
            await axios({
              method: "post",
              url: "https://videosubmission-backend-1.onrender.com/auth/user/signup",
              data: { name: uname, email: email },
            }).then((res) => {
              console.log(res.data)
            });
            navigate("/verify_signup");
          } catch (err) {
            setError(err.response?.data?.message || 'Signup failed');
          } finally {
            setLoading(false); // Set loading to false when request is completed
          }
        } else {
          setError("Username's first 4 characters must be letters");
        }
      } else {
        setError("Username must be at least 4 characters long.");
      }
    } else {
      setError("Please provide both a username and an email address.");
    }
  };


  return (
    <>
      {loading ? (
        <LoadingSpinner /> // Show the loading spinner when loading is true
      ) : (
        <div>
          <NormalHeader />
          <div className="bg-white py-20">
            <div className="w-[90%] md:w-[30%] mx-auto shadow-md p-10">
              <div className="text-center mb-4">
                <h2 className="font-bold text-2xl">Sign Up</h2>
                <p className="font-medium">Create Your Account</p>
              </div>
              <div>
                <dl className="space-y-2">
                  <dd>
                    <input
                      type="text" required
                      onChange={(e) => setUname(e.target.value)}
                      className="border focus:outline-none p-2 w-full font-medium rounded-md placeholder:text-sm"
                      placeholder="User Name"
                    />
                  </dd>
                  <dd>
                    <input
                      type="email" required
                      onChange={(e) => setEmail(e.target.value)}
                      className="border focus:outline-none p-2 w-full font-medium rounded-md placeholder:text-sm"
                      placeholder="Email or Phone"
                    />
                  </dd>
                </dl>
                <Link >
                  <button
                    onClick={handleSubmission}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault(); // Prevent default form submission behavior
                        handleSubmission();
                      }
                    }}
                    className="bg-green-600 w-full p-1.5 rounded text-white font-semibold mt-3"
                  >
                    SignUp
                  </button>
                </Link>
                <p className='text-red-500 font-medium text-sm mt-1'>{error}</p>
                {/* <div className="mt-4 mb-2 relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    {' '}
                    Or Sign in with{' '}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button className="border w-full flex items-center justify-center gap-1 p-1.5 rounded-md">
                  <FcGoogle className="text-2xl" />{' '}
                  <h4 className="font-medium">Google</h4>
                </button>
                <Link to="/mobile">
                  <button className="border w-full flex items-center justify-center gap-1 p-1.5 rounded-md">
                    <CiMobile3 className="text-2xl" />{' '}
                    <h4 className="font-medium">Mobile</h4>
                  </button>
                </Link>
              </div> */}
                <div className="mt-2 text-center">
                  <button>
                    Already have an account?{' '}
                    <Link to="/login" className="font-semibold">
                      SignIn
                    </Link>
                  </button>
                </div>
                <div className="mt-1 text-center">
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 font-medium text-sm"
                  >
                    <TiArrowLeft className="text-xl" />
                    <span>Back To Home</span>
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
