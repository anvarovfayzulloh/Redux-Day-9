import { api } from "./index";

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProduct  : build.query({
      query: () => ({
        url: "/product/all"
      }),
    }),
    getProductDetails: build.query({
      query: (id) => ({
        url: `/product/single-product/${id}`
      }),
      providesTags: ["PRODUCT"]
    }),
    likeProduct: build.mutation({
      query: ({id}) => ({
        url: `/product/${id}/like`,
        method: "PATCH"
      }),
      providesTags: ["PRODUCT"]
    }),
    unlikeProduct: build.mutation({
      query: ({id}) => ({
        url: `/product/${id}/unlike`,
        method: "PATCH"
      }),
      invalidatesTags: ["PRODUCT"]
    })
  }),
});

export const { useGetProductQuery, useGetProductDetailsQuery, useSearchProductMutation, useLikeProductMutation, useUnlikeProductMutation } = productsApi;