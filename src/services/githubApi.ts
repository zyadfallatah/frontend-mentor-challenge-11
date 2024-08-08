import { Octokit } from "octokit";

export type UsernameSchema =
  | {
      avatar_url: string;
      login: string;
      created_at: string; // "2011-01-25T18:44:36Z"
      public_repos: number;
      following: number;
      followers: number;
      bio: string | null;
      name: string | null;
      twitter_username?: string | null;
      location: string | null;
      blog: string | null;
      company?: string | null;
    }
  | undefined;

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

export const getUser = async function (username: string) {
  const response = await octokit.request("GET /users/{username}", {
    username,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return response.data;
};
