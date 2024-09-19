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
    }),
  }),
});

export const { useProfileFetchQuery, useGetUsersQuery } = profileApi;