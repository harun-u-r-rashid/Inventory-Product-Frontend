import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import imageOne from "../../assets/product.jpg"
import useAxios from '../../utils/useAxios';
import apiInstance from '../../utils/axios';
import Toast from '../plugin/Toast';
import UserData from '../plugin/UserData';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';

function Index() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const user = UserData();
    console.log(user.user_id)

    const fetchProduct = async () => {
        setIsLoading(true);
        try {
            await useAxios()
                .get(`product/product_list/`)
                .then((res) => {
                    setProducts(res.data);
                    console.log(res.data)

                })

        } catch (error) {
            console.log(error);

        }
    };


    useEffect(() => {
        fetchProduct();
    }, [])

    const navigate = useNavigate();



    const productDelete = async (id) => {

        if (user.user_id) {
            try {
                await apiInstance
                    .delete(`product/delete/${id}/`)
                    .then((res) => {
                        console.log(res.data);
                        Toast().fire({

                            icon: "success",
                            title: "Product deleted successfully",
                        });
                        navigate("/");
                    });


            } catch (error) {
                Toast().fire({

                    icon: "error",
                    title: error,
                });

            }


        } else {
            console.log(res.data);
            Toast().fire({

                icon: "error",
                title: "You are not an authorized user",
            });

        }



    };


    const [searchQuery, setSearchQuery] = useState("");


    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        if (query === "") {
            fetchProduct();
        } else {
            const product = products.filter((course) => {
                return course.name.toLowerCase().includes(query);
            });
            setProducts(product);
        }
    };





    return (
        <>
            <Nav></Nav>

            <section className='mb-5'>

                <div className='gridContainer'>
                    <h1 className='text-center mb-3'>🗳️ Products</h1>

                    <form class="max-w-md mx-auto">
                        {/* <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required
                                onChange={handleSearch}
                            />
                            {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                        </div>
                    </form>



                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products?.map((product, index) => (

                            <div className="bg-white shadow-md rounded-lg p-4">


                                {/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> */}
                                <a href="#">
                                    <img class="rounded-t-lg" src={imageOne} alt="" />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                                    </a>

                                    <h5 className='mb-4'>{product.price} <sub>tk.</sub> </h5>

                                    <div className='twoBtn'>
                                        <button className='btn'>
                                            <Link
                                                to={`details/${product.id}/`}
                                                className="text-inherit text-decoration-none text-dark fs-5"
                                            >
                                                Details <i class="fa-solid fa-right-long"></i>

                                            </Link>

                                        </button>

                                       {
                                        user.user_id && (

                                            <button
                                            onClick={() => productDelete(product.id)}
                                            type='button'
                                            className='btn deleteBtn'>
                                            Delete <i class="fa-solid fa-trash"></i>
                                        </button>
                                        )
                                       }
                                    </div>

                                </div>
                                {/* </div> */}

                            </div>
                        ))}


                    </div>
                </div>

            </section>

            <Footer></Footer>


        </>
    )
}

export default Index
