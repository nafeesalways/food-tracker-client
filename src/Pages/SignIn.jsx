import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const SignIn = () => {
  const { logIn,googleSignIn  } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
      const handleGoogleSignIn =()=>{
    googleSignIn().then((result)=>{
      navigate('/')
      console.log(result)
    }).catch((error)=>{
      console.log(error)
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("User created successfully!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`Error (${errorCode}): ${errorMessage}`);
      });
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center text-green-500">Sign In now!</h1>
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                 defaultValue="testuser@example.com"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                defaultValue="123456#Tu"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn bg-green-600 text-white rounded-xl hover:bg-green-700 transition mt-4">
                SignIn
              </button>
              <p className="text-center font-semibold text-lg">or</p>
            
              <p className="text-gray-600 font-semibold text-center">
                Don't have an account? Please{" "}
                <Link
                  className="underline text-green-400 font-extrabold"
                  to="/register"
                >
                  Register
                </Link>
              </p>
            </form>
              <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
