import React from "react";

const Login = () => {
  return (
    <>
      <div className="bg-black min-h-screen flex items-center justify-center p-4 text-white">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-200 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Login
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded bg-gray-100 text-gray-800"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded bg-gray-100 text-gray-800"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gray-800 text-white font-semibold rounded hover:bg-gray-700 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
