import { Octokit } from "octokit";

export type UsernameSchema = {
  avatar_url: string;
  login: string;
  public_repos: string;
  created_at: Date; // "2011-01-25T18:44:36Z"
  following: number;
  followers: number;
  bio?: string;
  name?: string;
  twitter_username?: string;
  location?: string;
  blog?: string;
  company?: string;
};

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

export const getUser = async function (
  username: string
): Promise<UsernameSchema> {
  const response = await octokit.request(`GET /users/${username}`, {
    username: "USERNAME",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return response.data;
};
