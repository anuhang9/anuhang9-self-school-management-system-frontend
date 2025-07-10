import {motion} from 'framer-motion'
import { Input } from '../components/Input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Lock, UserSearch } from 'lucide-react';
export const Login =()=>{

    const[loginData, setLoginData] = useState({
        userName: "",
        password: ""
    })
    const handleChange =(evt: React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = evt.target;
        setLoginData((prevData)=>({...prevData, [name]: value}))
    }
    const handleSubmit =(evt: React.FormEvent)=>{
        evt.preventDefault();
        console.log(loginData)
    }
    return(
        <motion.div initial={{opacity: 0, y:20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}} className='max-w-md bg-gray-800/50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'>
            <div className='p-8'>
                <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>Welcome Back</h2>
                <form onSubmit={handleSubmit}>
                    <Input icon={UserSearch} type='text' placeholder='username' onChange={handleChange} value={loginData.userName} name='userName'/>
                    <Input icon={Lock} type='password' placeholder='password' onChange={handleChange} value={loginData.password} name='password'/>
                    <div className='flex items-center mb-6'>
                        <Link to='/forget-password' className='text-sm text-green-400 hover:underline'>Forgot password?</Link>
                    </div>
                    <motion.button className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 cursor-pointer" whileHover={{scale: 1.02}} whileTap={{scale: 0.98}} type="submit" >Login</motion.button>
                </form>
            </div>
            <div className='px-8 py-4 bg-gray-900/50 flex justify-center items-center'>
            <p className='text-sm text-gray-400'>Already have an Account?</p>
            <Link to={"/signup"} className="text-green-400 hover:underline">Sign up</Link>
            </div>
        </motion.div>
    )
}