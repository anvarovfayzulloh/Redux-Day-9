import { api } from "./index";

const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    profileFetch: build.query({
      query: () => ({
        url: "/auth/profile",
      }),
    }),
    getUsers: build.query({
      query: () => ({
        url: "/admin/registered-users",
      }),
      providesTags: ["USERS"],
    }),
    promoteUser: build.mutation({
      query: ({ username }) => ({
        url: "/admin/add-admin",
        method: "POST",
        body: { username },
      }),
      invalidatesTags: ["USERS"],
    }),
    deleteUser: build.mutation({
      query: ({ id }) => ({
        url: `/admin/delete-user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["USERS"],
    }),
  }),
});

export const { useProfileFetchQuery, useGetUsersQuery, usePromoteUserMutation, useDeleteUserMutation } = profileApi;
