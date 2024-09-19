import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import { useGetProductsQuery } from '../../redux/api/productsApi';
import { useLikeProductMutation, useUnlikeProductMutation } from '../../redux/api/productApi';
import { useProfileFetchQuery } from '../../redux/api/profileApi';
import { Loading } from '../../utils';

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const { data: profile, isLoading: profileLoading } = useProfileFetchQuery();
  const [likeProduct] = useLikeProductMutation();
  const [unLikeProduct] = useUnlikeProductMutation();

  const handleLike = async (id) => {
    try {
      await likeProduct({ id }).unwrap();
    } catch (error) {
      console.error("Failed to like the product", error);
    }
  };

  const handleUnLike = async (id) => {
    try {
      await unLikeProduct({ id }).unwrap();
    } catch (error) {
      console.error("Failed to unlike the product", error);
    }
  };

  if (isLoading || profileLoading) {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <Loading />
      </div>
    );
  }

  return (
    <div className="container max-w-[1000px] mx-auto px-4 flex flex-wrap pt-[40px] gap-[30px]">
      {data?.payload?.length ? (
        data.payload.map((product) => {
          const isLiked = profile?.payload?.username && product.likedby.includes(profile.payload.username);

          return (
            <div key={product._id} className="mb-6 outline-none">
              <Carousel className="max-w-[200px] bg-[#DDDDDE] mx-auto" arrows dots={false} infinite={true}>
                {product.product_images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={product.product_name} className="w-full h-auto" />
                  </div>
                ))}
              </Carousel>
              <span className='flex items-center gap-[10px]' >
              <button onClick={() => isLiked ? handleUnLike(product._id) : handleLike(product._id)} aria-label={isLiked ? "Unlike product" : "Like product"} className={`p-2 w-[25px] ${isLiked ? 'text-red-700' : 'text-[#fff]'}`} >
                {isLiked ? <FcLike /> : <FcLikePlaceholder />}
              </button>
              <span className="text-[#000]">{product.likes}</span>
              </span>
              <p className="text-center text-lg font-semibold mt-4">{product.product_name}</p>
              <div className="flex justify-center mt-2">
                <Link
                  to={`/product/${product._id}`}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
                >
                  View Product
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center text-lg font-semibold mt-4">No products available</p>
      )}
    </div>
  );
}

export default Products;
