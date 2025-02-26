import { useState } from "react";
import Logo from "../Shared/Logo";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url(./auth/bg_img.png)] p-6">
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-3xl max-h-[90vh] p-6 gap-6">
        {/* Left Side - Image */}
        <div className="w-1/2 hidden md:flex items-center justify-center bg-purple-200 p-4 bg-[url(./auth/img2.svg)] bg-cover bg-center rounded-2xl">
          <img
            src="./auth/image.svg"
            alt="login-illustration"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-2/3">
          {/* Login Title and Logo */}
          <div className="flex items-center justify-between w-full mb-4">
            <h2 className="text-2xl text-[#000000] font-bold">Login</h2>
            <div className="ml-auto">
              <Logo className="h-10 w-auto" />
            </div>
          </div>

          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Radio Buttons */}
            <div className="mb-3 flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  onChange={handleChange}
                  className="mr-2"
                />
                Student
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  onChange={handleChange}
                  className="mr-2"
                />
                Recruiter
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
            >
              Login
            </button>
          </form>

          <p className="mt-3 text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-[#0075E9] font-semibold">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
