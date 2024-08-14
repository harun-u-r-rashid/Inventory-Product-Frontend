import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import imageOne from '../../assets/product.jpg'
import useAxios from '../../utils/useAxios';
import apiInstance from '../../utils/axios';
import Toast from '../plugin/Toast';
import UserData from '../plugin/UserData';

import Nav from '../partials/Nav';
import Footer from '../partials/Footer';


function Details() {

        const [product, setProduct] = useState([]);
        const [isLoading, setIsLoading] = useState(false);

        const user = UserData();
        const param = useParams();
        const navigate = useNavigate();



        const fetchDetails = () => {
                useAxios()
                        .get(`product/details/${param.id}/`)
                        .then((res) => {
                                setProduct(res.data);
                                console.log(res.data);

                        });
        };

        useEffect(() => {
                fetchDetails();
        }, []);


        const [updateProduct, setUpdateProduct] = useState({
                name: "",
                slug: "",
                description: "",
                price: "",
                quantity: "",

        });
        console.log(updateProduct.name);

        const handleUpdateProduct = (event) => {
                setUpdateProduct({
                        ...updateProduct,
                        [event.target.name]: event.target.value,
                });
        };



        const update = async (e) => {
                e.preventDefault()
                const formdata = new FormData()
                formdata.append("name", updateProduct.name);
                formdata.append("slug", updateProduct.slug);
                formdata.append("description", updateProduct.description);
                formdata.append("price", updateProduct.price);
                formdata.append("quantity", updateProduct.quantity);

                try {
                        await apiInstance.put(`product/update/${param.id}/`, formdata).then((res) => {
                                Toast().fire({
                                        title: "Product Updated successfully",
                                        icon: "success"
                                })
                                navigate("/");
                        })
                } catch (error) {
                        console.log(error);

                }
        };

        return (
                <>
                        <Nav></Nav>
                        <section>

                                <div className='detailsContainer'>
                                        <div class=" swiffy-slider slider-item-show2 slider-item-reveal slider-nav-outside slider-nav-round slider-nav-visible slider-indicators-outside slider-indicators-round slider-indicators-dark slider-nav-animation slider-nav-animation-fadein">

                                                <p className='slugItem'>{product.slug}</p>


                                                <div class="card shadow h-100">
                                                        <div class="ratio ratio-16x9">
                                                                <img src={imageOne} class="card-img-top w-500 h-auto" loading="lazy" alt="..." />
                                                        </div>
                                                        <div class="card-body bg-white p-4 md:p-6 lg:p-8 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
                                                                <h3 class="card-title text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                                                                <p class="card-text text-gray-600 mb-4">`{product.description}`</p>
                                                                <p class="text-lg font-medium  text-blue-900 mb-2">{product.price} Tk.</p>
                                                                <p class="text-sm text-gray-500">Stock: {product.quantity} pieces</p>
                                                        </div>
                                                </div>


                                        </div>



                                </div>



                        </section>

                       {user.user_id && (

<section>

<div className='updateContainer'>
        <h1 className='text-dark text-center'>Update Product</h1>
        <div className="updateContent">
                <form onSubmit={update} className="max-w-md mx-auto mb-10">
                        <div className="relative z-0 w-full mb-5 group">
                                <input
                                        type="text"
                                        name="name" // Changed from "floating_text" to "name"
                                        id="floating_text"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                        value={updateProduct.name}
                                        onChange={handleUpdateProduct} // Changed from "update" to "handleUpdateProduct"
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
                                        value={updateProduct.slug}
                                        onChange={handleUpdateProduct} // Changed from "update" to "handleUpdateProduct"
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
                                        value={updateProduct.description}
                                        onChange={handleUpdateProduct} // Changed from "update" to "handleUpdateProduct"
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
                                                type="number"
                                                name="price" // Changed from "floating_phone" to "price"
                                                id="floating_phone"
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                placeholder=" "
                                                required
                                                value={updateProduct.price}
                                                onChange={handleUpdateProduct} // Changed from "update" to "handleUpdateProduct"
                                        />
                                        <label
                                                htmlFor="floating_phone" // Changed to match the input's id
                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                                Price
                                        </label>
                                </div>

                                <div className="relative z-0 w-full mb-5 group">
                                        <input
                                                type="text"
                                                name="quantity" // Changed from "floating_company" to "quantity"
                                                id="floating_company"
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                placeholder=" "
                                                required
                                                value={updateProduct.quantity}
                                                onChange={handleUpdateProduct} // Changed from "update" to "handleUpdateProduct"
                                        />
                                        <label
                                                htmlFor="floating_company" // Changed to match the input's id
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
                                Update
                        </button>
                </form>
        </div>

</div>

</section>

                       )}

                        <Footer></Footer>
                </>
        );
}



export default Details;