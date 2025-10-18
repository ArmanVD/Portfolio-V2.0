import { storyblokInit, apiPlugin } from "@storyblok/js";

const { storyblokApi } = storyblokInit({
  accessToken: "yl0AK3ZFrrMbJDrLgOT36wtt", // Public access token
  use: [apiPlugin],
});

export default storyblokApi;
