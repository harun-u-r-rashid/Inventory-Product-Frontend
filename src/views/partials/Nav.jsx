import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/footerLogo.png';
function Nav() {
        return (
                <>
                        <section className='navSection'>

                                <nav class="navContainer fixed w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                                        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                                                <Link to="/">
                                                        <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
                                                                <img src={Logo} class="h-8" alt="Flowbite Logo" />
                                                              
                                                        </a>
                                                </Link>
                                                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                                                        <Link to="/create/">
                                                        <button type="button" class="addBtn font-medium rounded-lg text-sm px-2 py-2.5 text-center">Add Product <i class="fa-solid fa-plus"></i></button>
                                                        </Link>
                                                       
                                                        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                                                <span class="sr-only text-dark">Open main menu</span>
                                                                <i class="icon fa-solid fa-bars"></i>
                                                        </button>
                                                </div>
                                                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                                                        <ul class="menuItem flex flex-col p-4 md:p-0 mt-4 font-medium    md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                                                <Link to="/">
                                                                <li>
                                                                        <a href="#" class="block py-2 px-3  rounded md:bg-transparent  md:p-0 text-center text-uppercase " aria-current="page">Home</a>
                                                                </li>
                                                                </Link>
                                                                <Link to="/login/">
                                                                <li>
                                                                        <a href="#" class="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent text-center text-uppercase  md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign In</a>
                                                                </li>
                                                                </Link>
                                                                <Link to="/register/">
                                                                
                                                                <li>
                                                                        <a href="#" class="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent text-center text-uppercase  md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign Up</a>
                                                                </li>
                                                                </Link>

                                                                <Link to="/logout/">
                                                                <li>
                                                                        <a href="#" class="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent text-center text-uppercase  md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign Out</a>
                                                                </li>
                                                                </Link>
                                                               
                                                        </ul>
                                                </div>
                                        </div>
                                </nav>



                        </section>

                </>
        );
}

export default Nav;