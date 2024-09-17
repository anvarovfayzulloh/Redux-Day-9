import { api } from "./index";

const fetchUsers = api.injectEndpoints({
    endpoints: build => ({
      getUsers: build.query({
        query: () => ({
          url: "/admin/users",
        }),
        transformResponse: (response, meta, error) => {
          // Handle non-JSON errors
          if (meta?.response?.status === 404 || error) {
            return { error: "Endpoint not found or invalid response" };
          }
          return response;
        },
      }),
    }),
  });
  
  export const { useGetUsersQuery } = fetchUsers;
  