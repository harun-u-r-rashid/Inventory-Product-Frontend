import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Toast from '../plugin/Toast';
import apiInstance from '../../utils/axios.js'
import { register } from '../../utils/auth.js';

import Nav from '../partials/Nav.jsx';
import Footer from '../partials/Footer.jsx';


function Register() {

        const [fullName, setFullName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [password2, setPassword2] = useState("");
        const [isLoading, setIsLoading] = useState(false);

        const navigate = useNavigate();

        const handleRegistration = async (e) => {
                e.preventDefault();
                setIsLoading(true);

                const { error } = await register(fullName, email, password, password2);
                if (error) {
                        Toast().fire({
                                icon: 'error',
                                title: 'Registration failed'
                        })
                        setIsLoading(false);
                } else {
                        navigate("/");
                        Toast().fire({
                                icon: 'success',
                                title: 'Registration completed and you have been logged in!'
                        })
                }
        }

        return (
                <>

                        <Nav></Nav>
                        <section>
                                <div className='authContainer'>

                                        <h6 className='text-dark text-center '>Share your information for signing up</h6>


                                        <form onSubmit={handleRegistration} class="max-w-md mx-auto">
                                                <div class="relative z-0 w-full mb-5 group">
                                                        <input type="text" name="floating_fullName" id="floating_fullName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e) => setFullName(e.target.value)} />
                                                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                                                </div>
                                                <div class="relative z-0 w-full mb-5 group">
                                                        <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e) => setEmail(e.target.value)} />
                                                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                                </div>
                                                <div class="relative z-0 w-full mb-5 group">
                                                        <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e) => setPassword(e.target.value)} />
                                                        <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                                </div>
                                                <div class="relative z-0 w-full mb-5 group">
                                                        <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e) => setPassword2(e.target.value)} />
                                                        <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                                                </div>

                                                <div className='btnContainer'>
                                                        <Link to="/login/">
                                                                <p className='text-dark text-center mb-5'>Have account?  </p>
                                                        </Link>
                                                </div>


                                                <button type="submit" className="btn">Sign Up <i class="fa-solid fa-right-to-bracket"></i></button>
                                        </form>
                                </div>
                        </section>

                        <Footer></Footer>
                </>
        );
}

export default Register;