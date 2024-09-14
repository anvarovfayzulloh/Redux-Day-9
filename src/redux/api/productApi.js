import { api } from "./index";

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query({
      query: (id) => ({
        url: `product/single-product/${id}`
      }),
    })
  }),
});

export const { useGetProductQuery } = productApi;