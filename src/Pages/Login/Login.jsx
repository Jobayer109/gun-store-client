import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        form.reset();
        navigate("/");
        console.log(result.user);
      })
      .then((error) => console.log(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        navigate("/");
        console.log(result.user);
      })
      .then((error) => console.log(error.message));
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 mx-auto my-20 bg-black">
      <h1 className="text-3xl font-bold text-center text-orange-500">Sign in</h1>
      <form
        onSubmit={handleSubmit}
        novalidate=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label for="email" className="block text-gray-300">
            Your email
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label for="password" className="block text-gray-300">
            password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            required
          />
          <div className="flex justify-end text-xs dark:text-gray-400">
            <Link rel="noopener noreferrer" href="#">
              Forgot Password?
            </Link>
          </div>
        </div>
        <button className="btn btn-outline bt-md btn-success w-full">Sign in</button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 text-sm text-gray-200 dark:text-gray-400">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <div onClick={handleGoogleSignIn} className="flex justify-center text-white space-x-4">
        <button aria-label="Log in with Google" className="p-3 rounded-sm">
          <FaGoogle></FaGoogle>
        </button>
        <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
          <FaTwitter></FaTwitter>
        </button>
        <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
          <FaGithub></FaGithub>
        </button>
      </div>
      <p className="text-xs text-center text-white sm:px-6 dark:text-gray-400">
        Don't have an account? {""}
        <Link
          rel="noopener noreferrer"
          to="/register"
          className="underline text-orange-500 font-bold text-lg"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
