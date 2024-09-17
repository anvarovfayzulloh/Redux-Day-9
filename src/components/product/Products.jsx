import React from 'react';
import { useGetProductsQuery } from '../../redux/api/productsApi';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';


const Products = () => {
  const { data } = useGetProductsQuery();

  return (
    <div className="container max-w-[1000px] flex-wrap mx-auto px-4 flex pt-[40px] items-center gap-[30px]">
      {
        data && data.payload &&
        data.payload.map(product => (
          <div key={product._id} className="mb-6 outline-none">
            <Carousel className="max-w-[200px] bg-[#DDDDDE] mx-auto outline-none" arrows dots={false} infinite={true}>
              {
                product.product_images ? product.product_images.map((image, index) => (
                  <div key={index} className='outline-none'>
                    <img src={image} alt={product.product_name} className="w-full h-auto" />
                  </div>
                )) : <p>Loading...</p>
              }
            </Carousel>
            <p className="text-center text-lg font-semibold mt-4">{product.product_name}</p>
            <div className="flex justify-center mt-2">
              <Link to={`/product/${product._id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300" >
                View Product
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Products;
