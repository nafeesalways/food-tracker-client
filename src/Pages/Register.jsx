import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Name validation
    if (name.length < 6) {
      setNameError("Name should be more than 6 characters");
      return;
    } else {
      setNameError("");
    }

    // Password validation
    const passwordRegEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    if (!passwordRegEx.test(password)) {
      toast.error(
        "Password must have at least 1 uppercase letter, 1 lowercase letter, 1 special character and be at least 8 characters long."
      );
      return;
    }

    console.log({ name, photo, email, password });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser(result.user, { displayName: name, photoURL: photo }).then(
          () => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
            toast.success("User created successfully!");
          }
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        toast.error(`Error (${errorCode}): ${errorMessage}`);
      })
      .catch((error, user) => {
        setUser(user);
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
            <h1 className="text-5xl font-bold text-center text-green-500">Register now</h1>
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />
              {nameError && <p className="text-xs text-error">{nameError}</p>}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Enter Photo URL"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <button className="btn bg-green-600 text-white rounded-xl hover:bg-green-700 transition  mt-4">
                Register
              </button>
              <p className=" font-semibold text-center text-gray-300">
                Already have an account? Please{" "}
                <Link
                  className="underline  font-extrabold text-green-600"
                  to="/signin"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
