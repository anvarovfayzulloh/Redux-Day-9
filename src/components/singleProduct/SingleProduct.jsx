import { FcLike } from "react-icons/fc";
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../redux/api/productApi';
import { Carousel } from 'antd';
import 'antd/dist/reset.css';


const SingleProduct = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useGetProductQuery(id);
    const product = data?.payload;
    
    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>Failed to load product</p>;

    return (
        <div className="max-w-[1200px] mx-auto p-8">
            {product ? (
                <div className="flex items-center shadow-lg rounded-lg bg-white p-6">
                    <Carousel className="max-w-[300px] bg-[#DDDDDE] mx-auto" arrows autoplay autoplaySpeed={3000} infinite>
                        {Array.isArray(product.product_images) ? product.product_images.map((image, index) => (
                            <div key={index} >
                                <img src={image} alt="" />
                            </div>
                        )) : <p>No images available</p>}
                    </Carousel>
                    <div className="ml-8">
                        <h1 className="text-3xl font-bold mb-6">{product.product_name}</h1>
                        <div className='flex relative'>
                            <p className="text-lg absolute top-[-20px] left-[100px] text-red-700 line-through font-semibold mb-2">${product.original_price}</p>
                            <p className="text-xl font-semibold mb-2">Price: ${product.sale_price}</p>
                        </div>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <p className='pb-[10px] flex gap-[5px] items-center'><FcLike /> Likes: {product.likes}</p>
                        <button className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-600">Product not found</p>
            )}
        </div>
    );
};

export default SingleProduct;
