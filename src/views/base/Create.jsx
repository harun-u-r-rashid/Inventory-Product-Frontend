import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import imageOne from '../../assets/product.jpg'
import useAxios from '../../utils/useAxios';
import apiInstance from '../../utils/axios';
import Toast from '../plugin/Toast';
import UserData from '../plugin/UserData';

import Nav from '../partials/Nav';
import Footer from '../partials/Footer';


function Create() {

        const [createProduct, setCreateProduct] = useState({
                name: "",
                slug: "",
                description: "",
                price: "",
                quantity: "",

        });

        const handleCreateProduct = (event) => {
                setCreateProduct({
                        ...createProduct,
                        [event.target.name]: event.target.value,
                });
        };

        const navigate = useNavigate();
        const user = UserData();


        console.log(user.user_id);





        const productCreate = async (e) => {
                e.preventDefault()
                const formdata = new FormData()
                formdata.append("name", createProduct.name);
                formdata.append("slug", createProduct.slug);
                formdata.append("description", createProduct.description);
                formdata.append("price", createProduct.price);
                formdata.append("quantity", createProduct.quantity);


                if (user.user_id) {
                        try {

                                await apiInstance.post(`product/create/`, formdata).then((res) => {
                                        Toast().fire({
                                                icon: "success",
                                                title: "Product created successfully",
                                        });
                                        navigate("/");

                                })

                        } catch (error) {
                                Toast().fire({
                                        icon: "error",
                                        title: error,

                                })

                        }
                } else {
                        Toast().fire({
                                icon: "error",
                                title: "You are not an authorized user",
                        });
                        navigate("/login/");

                }

        }



        return (
                <>
                        <Nav></Nav>
                        <section>

                                <div className="createContainer">
                                        <h1>✅ Create New Product</h1>

                                        <div>

                                                <form onSubmit={productCreate} className="max-w-md mx-auto mb-10">
                                                        <div className="relative z-0 w-full mb-5 group">
                                                                <input
                                                                        type="text"
                                                                        name="name" // Changed from "floating_text" to "name"
                                                                        id="floating_text"
                                                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                                        placeholder=" "
                                                                        required
                                                                        value={createProduct.name}
                                                                        onChange={handleCreateProduct} // Changed from "update" to "handleUpdateProduct"
                                                                />
                                                                <label
                                                                        htmlFor="floating_text" // Changed to match the input's id
                                                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                                >
                                                                        Product Name
                                                                </label>
                                                        </div>

                                                        <div className="relative z-0 w-full mb-5 group">
                                                                <input
                                                                        type="text" // Changed from "email" to "text"
                                                                        name="slug" // Changed from "floating_email" to "slug"
                                                                        id="floating_email"
                                                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                                        placeholder=" "
                                                                        required
                                                                        value={createProduct.slug}
                                                                        onChange={handleCreateProduct} // Changed from "update" to "handleUpdateProduct"
                                                                />
                                                                <label
                                                                        htmlFor="floating_email" // Changed to match the input's id
                                                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                                >
                                                                        Slug
                                                                </label>
                                                        </div>

                                                        <div className="relative z-0 w-full mb-5 group">
                                                                <textarea
                                                                        name="description" // Changed from "floating_password" to "description"
                                                                        id="floating_password"
                                                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                                        placeholder=" "
                                                                        required
                                                                        value={createProduct.description}
                                                                        onChange={handleCreateProduct}// Changed from "update" to "handleUpdateProduct"
                                                                />
                                                                <label
                                                                        htmlFor="floating_password" // Changed to match the textarea's id
                                                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                                >
                                                                        Description
                                                                </label>
                                                        </div>

                                                        <div className="grid md:grid-cols-2 md:gap-6">
                                                                <div className="relative z-0 w-full mb-5 group">
                                                                        <input
                                                                                type="text"
                                                                                name="price"
                                                                                id="floating_company"
                                                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                                                placeholder=" "
                                                                                required
                                                                                value={createProduct.price}
                                                                                onChange={handleCreateProduct}
                                                                        />
                                                                        <label
                                                                                htmlFor="floating_company"
                                                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                                        >
                                                                                Price
                                                                        </label>
                                                                </div>

                                                                <div className="relative z-0 w-full mb-5 group">
                                                                        <input
                                                                                type="text"
                                                                                name="quantity"
                                                                                id="floating_company"
                                                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                                                placeholder=" "
                                                                                required
                                                                                value={createProduct.quantity}
                                                                                onChange={handleCreateProduct}
                                                                        />
                                                                        <label
                                                                                htmlFor="floating_company"
                                                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                                                        >
                                                                                Quantity
                                                                        </label>
                                                                </div>
                                                        </div>

                                                        <button
                                                                type="submit"
                                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                        >
                                                                Create
                                                        </button>
                                                </form>

                                        </div>

                                </div>
                        </section>
                        <Footer></Footer>
                </>
        );
}

export default Create;