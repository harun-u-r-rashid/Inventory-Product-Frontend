import React from 'react';
import Logo from '../../assets/logo/footerLogo.png'
import { Link } from 'react-router-dom';
function Footer() {
        return (
                <>



                        <footer class="bg-dark rounded-lg shadow dark:bg-gray-900 m-4">
                                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                                        <div class="sm:flex sm:items-center sm:justify-between">
                                                <Link to="/">

                                                <a href="" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                                        <img src={Logo} class="h-8" alt="Flowbite Logo" />
                                                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                                                </a>
                                                
                                                
                                                </Link>
                                                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white-500 sm:mb-0 white:text-gray-400">
                                                        <li>
                                                                <a href="#" class="hover:underline me-4 md:me-6">Home</a>
                                                        </li>
                                                        <li>
                                                                <a href="#" class="hover:underline me-4 md:me-6">Sign In</a>
                                                        </li>
                                                        <li>
                                                                <a href="#" class="hover:underline me-4 md:me-6">About</a>
                                                        </li>
                                                        <li>
                                                                <a href="#" class="hover:underline">Contact</a>
                                                        </li>
                                                </ul>
                                        </div>
                                        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                                        <span class="block text-sm text-light-500 sm:text-center dark:text-gray-400">© 2024 <a href="" class="hover:underline"></a>. All Rights Reserved.</span>
                                </div>
                        </footer>


                </>
        );
}

export default Footer;