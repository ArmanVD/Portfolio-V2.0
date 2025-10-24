import { storyblokInit, apiPlugin, type StoryblokClient } from "@storyblok/js";

let cachedApi: StoryblokClient | null = null;

export function getStoryblokApi(): StoryblokClient {
  if (cachedApi) return cachedApi;

  const token = import.meta.env.PUBLIC_STORYBLOK_TOKEN;
  if (!token) {
    throw new Error("PUBLIC_STORYBLOK_TOKEN is missing. Put it in your .env (PUBLIC_STORYBLOK_TOKEN=...)");
  }

  const { storyblokApi } = storyblokInit({
    accessToken: token,
    use: [apiPlugin],
  });

  if (!storyblokApi) {
    throw new Error("Storyblok API failed to initialize.");
  }

  cachedApi = storyblokApi;
  return storyblokApi;
}
