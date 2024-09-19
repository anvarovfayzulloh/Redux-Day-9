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
      })
    }),
    searchProduct: build.mutation({
      query: (searchQuery) => ({
        url: `/product/search?ProductName=${searchQuery}`,
        method: "POST"
      })
    })
  }),
});

export const { useGetProductQuery, useGetProductDetailsQuery, useSearchProductMutation } = productsApi;