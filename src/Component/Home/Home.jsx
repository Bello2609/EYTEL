import React from 'react';
import Navbar from '../../UI/Navbar/Navbar';
import * as Image from "../Images/image";
import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa';
const Home = ()=>{
    return (
        <>
            <div className="flex flex-col">
                <Navbar />
                <div className="flex justify-center w-full mt-3">
                    <div className="flex flex-col justify-center  align-center w-1/2">
                        <img src={Image.eyitel} alt="logo" className="w-44 mx-60" width="145px" />
                        <h2 className='text-violet-900 text-5xl font-sans font-medium mb-4'>Welcome to the best security platform.</h2>
                        <p className='text-violet-900 text-base font-sans font-medium mb-2'>EYTel is a digitalized security platform that holds on to the responsibility 
                        of ensuring the safety and </p>
                        <p className='text-violet-900 text-base font-sans font-medium mb-10'>security of its users. We're here to secure you.</p>
                        <Link to="/go" className="bg-violet-900 w-44 h-10 p-2 mx-60 rounded-3xl text-white font-sans">LET'S GO</Link>
                    </div>
                </div>
                <div className='flex justify-center w-full mt-28'>
                    <div className='flex flex-col h-auto w-4/5 bg-indigo-100'>
                        <div className="flex justify-start align-center w-full p-5 h-16 bg-purple-400">
                            <div className='w-5 h-5 bg-orange-600 rounded-full mr-3'></div>
                            <div className='w-5 h-5 bg-amber-400 rounded-full mr-3'></div>
                            <div className='w-5 h-5 bg-green-600 rounded-full'></div>
                        </div>
                        <div className='flex flex-col'>
                            <img src={Image.Group23} alt="group" srcset="" />
                            <h6 className='text-violet-900 font-normal text-2xl font-sans mt-32'>Choose the type of content you want EYETel to focus on</h6>
                            <p className='font-medium text-violet-900 text-base'>Don't worry, you can always change it later and we'll make sure you won't miss the big things. 
                            We have </p><p className='font-medium text-violet-900 text-base'>designed our platform to make your navigation as smooth as possible.</p>
                        </div>   
                        <div className="flex flex-col mt-10">
                            <div className='p-3.5 bg-white w-80 h-16 mx-96 rounded mb-2'>
                                {/* <p><FaCheckCircle /></p> */}
                                <p className='text-violet-900 text-lg not-italic font-semibold'>Documenting your Journey</p>
                            </div>
                            <div className='p-3.5 w-80 h-16 mx-96 border-2 border-violet-900 mb-5'><p className="text-violet-900 text-lg not-italic font-medium">Connecting with your Family</p></div>
                            <div className='p-3.5 w-80 h-16 mx-96 border-2 border-violet-900 mb-5'><p className="text-violet-900 text-lg not-italic font-medium">Lawyer Hiring</p></div>
                            <div className='p-3.5 w-80 h-16 mx-96 border-2 border-violet-900 mb-5'><p className="text-violet-900 text-lg not-italic font-medium">Associating with Brands</p></div>
                            
                        </div>
                        <div className='flex flex-col justify-center'>
                            <div className='flex ml-96 mb-3'>
                                <Link to="/go" className="bg-violet-900 w-44 h-10 mx-10 rounded-3xl p-2 text-white font-sans">Save</Link>
                            </div>
                            <p className="text-violet-900 text-lg not-italic font-medium">Sign in or Create an account to save your content preferences and </p>
                            <p className="text-violet-900 text-lg not-italic font-medium">fully enjoy EYETel</p>
                            <Link to="/signin" className="p-5 bg-violet-900 mt-3 mb-5 mx-96 w-80 h-16 rounded-full text-white font-sans">SIGN IN</Link>
                            <Link to="/signout" className="p-5 bg-violet-900 mb-5 mx-96 w-80 h-16 rounded-full text-white font-sans">SIGN OUT</Link>
                            <p className="text-violet-900 text-lg not-italic font-medium">Try EYETel without signing up or signing in</p>
                        </div>
                        <p className="text-violet-900 text-sm not-italic font-medium">By signing in, I agree to EyETel's Terms of Service and Privacy Policy.</p>   
                        <p className="text-violet-900 text-sm not-italic font-medium">We'll never post to Twitter, Facebook or Google on your behalf or without permission.</p>    
                    </div>   
                       
                </div>
            </div>
        </>
    );
}
export default Home;