import { Octokit } from "octokit";

export type UsernameSchema = {
  login: string;
  name: string;
  twitter_username: string;
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
