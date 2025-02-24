import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-1/2 bg-purple-500 flex items-center justify-center p-6">
          <img
            src="https://via.placeholder.com/300" // Replace with actual image URL
            alt="Student"
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50"
          />
          
          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <div>
              <input type="radio" id="student" name="role" className="mr-1" />
              <label htmlFor="student">Student</label>
              <input type="radio" id="recruiter" name="role" className="ml-4 mr-1" />
              <label htmlFor="recruiter">Recruiter</label>
            </div>
            <a href="#" className="text-purple-600 hover:underline">Forgot Password?</a>
          </div>
          
          <button className="w-full bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700 transition duration-200">Login</button>
          
          <div className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account? <a href="#" className="text-purple-600 hover:underline">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
