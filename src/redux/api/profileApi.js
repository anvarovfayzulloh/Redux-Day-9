import { api } from "./index";

const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    profileFetch: build.query({
      query: (body) => ({
        url: "/auth/profile",
        body
      }),
    }),
  }),
});

export const { useProfileFetchQuery} = profileApi;