import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import banner1 from '../images/banner/b1.jpg';
import google_icon from '../images/icons/google.png';
import Logo_Light from '../images/chetulogo-light.png'
import Login from '../components/authentication';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/'); // Navigate to the '/Home' page
  };
  useEffect(() => {
    try {
        const user = JSON.parse(localStorage.getItem("userInfo"));    
        if (user) {
          navigate('/');
        }
      } catch (error) {
        console.error("Error parsing user info:", error);
        // Handle the error as per your application's requirements
      }      
}, [navigate]);

  return (
    <div className="w-full h-screen flex items-start">

      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center overflow-scroll">

        <h1 className="w-full max-w-[500px] mx-auto text-xl text-[#060606] font-semibold mr-auto">Admin Login</h1>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">Login</h3>
            <p className="text-base mb-2">Welcome Back! Please enter your details.</p>
          </div>

          <Login />

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black/40"></div>
            <p className="absolute text-black/80 bg-[#f5f5f5]">or</p>
          </div>

          <div className="w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
            <img src={google_icon} alt="" className="h-6 mr-2" />
            Sign In with Google
          </div>

        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606] ">Redirect to Landing Page <span className="font-semibold underline underline-offset-2 cursor-pointer" onClick={handleHome}>Click Here</span></p>
        </div>
      </div>
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <img src={Logo_Light} alt="" className="logo-c mr-2" />
          <h1 className="text-4xl text-white font-bold my-4">
            Lorem Ipsum is simply dummy text
          </h1>
          <p className="text-xl text-white font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        </div>
        <img src={banner1} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default LoginPage