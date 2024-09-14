import React from 'react';
import { useGetProductsQuery } from '../../redux/api/productsApi';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Products = () => {
  const { data } = useGetProductsQuery();

  return (
    <div className="container mx-auto px-4 flex justify-center pt-[40px] items-center">
      {
        data && data.payload &&
        data.payload.map(product => (
          <div key={product._id} className="mb-6">
            <Carousel className="max-w-[200px] bg-[#DDDDDE] mx-auto" arrows autoplay autoplaySpeed={3000} infinite={true}>
              {
                product.product_images ? product.product_images.map((image, index) => (
                  <div key={index}>
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
