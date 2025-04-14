import { useState } from "react";
import bgImage from "../assets/images/School.png";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Google Login Success:", decoded);
    localStorage.setItem("googleUser", JSON.stringify(decoded));
    navigate("/student/dashboard");
  };

  const handleGoogleError = () => {
    console.error("Google Login Failed");
  };

  // const handleLogin = () => {
  //   console.log("Logging in:", { username, password });
  //   // Replace with real login logic
  //   navigate("/student/dashboard");
  // };

  return (
    <div className="relative w-full h-screen">
      {/* Background */}
      <img
        src={bgImage}
        alt="School Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Glassmorphism Login Box */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-lg p-8 rounded-3xl w-[350px] sm:w-[400px] shadow-2xl">
        <h2 className="text-2xl font-semibold text-center text-black mb-6">Portal Login</h2>

        {/* Username */}
        <div className="ml-6">
          <label htmlFor="username" className="block text-md">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mr-12 rounded-full mb-4 px-3 py-1.5 border border-gray-500 w-[300px]"
          />


          {/* Password */}
          <label htmlFor="password" className="block text-md">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-full px-3 mb-5 py-1.5 border border-gray-500 w-[300px]"
          />
        </div>
        {/* Local Login Button
        <button
          onClick={handleLogin}
          className="w-full bg-white text-black font-semibold py-2 rounded-md border hover:bg-gray-100 mb-3"
        >
          Login
        </button> */}

        {/*  OAuth Buttons Section */}
        <div className="space-y-2 mt-2">
          {/* Microsoft Login Button */}
          <div className="flex justify-center">
            <button className="w-auto rounded-md bg-white hover:bg-gray-100 text-black border border-gray-300 flex items-center justify-center gap-2 py-2 px-3 ">
              <img
                src="https://img.icons8.com/color/24/000000/microsoft.png"
                alt="Microsoft"
              />
              <span className="text-sm ">Login with Microsoft</span>
            </button>
          </div>
          <div className="text-center font-medium text-black py-1">Or</div>

          {/* Google Login Button */}
          <div className="flex justify-center ">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
