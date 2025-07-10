import {motion} from 'framer-motion';
import { useState } from 'react';

export const EmailVerify =()=>{
    const [otpCode, setOtpCode]= useState(["", "", "", "", ""])
    return(
        <div className='max-w-md bg-gray-800/50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'>
            <motion.div initial={{opacity: 0, y:20}} animate={{opacity: 1, y:0}} transition={{duration: 0.5}} className='bg-gray-800/50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md'>
            <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>Verify Your Email</h2>
            <p className='text-center to-gray-300 mb-6'>Enter the 5 digit code.</p>
            <form className='space-y-6'>
                <div className='flex justify-between'>
                    {
                    otpCode.map((value, index)=>(
                        <input type='text' maxLength={5} key={index}  className='w-12 h-12 text-center text-2xl font-bold bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-green-500 focus:outline-none'/>
                    ))
                        }
                </div>
            </form>
            </motion.div>
        </div>
    )
}