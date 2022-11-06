import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Register = () => {
  const { createUser, profile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        profile(name, photoUrl);
        navigate("/login");
        form.reset();
        console.log(result.user);
      })
      .then((error) => console.log(error.message));
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 mx-auto my-20 bg-black">
      <h1 className="text-3xl font-bold text-center text-orange-500">Register</h1>
      <form
        onSubmit={handleSubmit}
        novalidate=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label for="name" className="block text-gray-300">
            Your name
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label for="photo" className="block text-gray-300">
            Your photo
          </label>
          <input
            type="text"
            name="photoURL"
            placeholder="photo link"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
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
        </div>
        <button className="btn btn-outline bt-md btn-success w-full">Register</button>
      </form>

      <p className="text-xs text-center text-white sm:px-6 dark:text-gray-400">
        Already have an account? {""}
        <Link
          rel="noopener noreferrer"
          to="/login"
          className="underline text-orange-500 font-bold text-lg"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Register;
