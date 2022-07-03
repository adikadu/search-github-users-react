import store from "./store";
import { useState, useEffect, useReducer, useCallback } from "react";

const BASE_URL = "https://api.github.com/users/";

const INITIAL_STATE = {
  id: null,
  username: "john-smilga",
  avatar: null,
  name: null,
  bio: null,
  company: null,
  location: null,
  blog: null,
  repos: null,
  followers: null,
  following: null,
  gists: null,
  url: null,
  followersInfo: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INITIALISE_USER_DATA":
      return action.fetchedUserData;
    case "UPDATE_USER":
      return { ...INITIAL_STATE, username: action.username };

    default:
      throw new Error("Invalid input to reducer...");
  }
};

export default function ContextProvider(props) {
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  const [requestsRemaining, setRequestsRemaining] = useState({
    remaining: 58,
    max: 60,
  });

  const [userData, dispatch] = useReducer(reducer, INITIAL_STATE);

  const getBasicUserData = useCallback(async (username) => {
    const res = await fetch(`${BASE_URL}${username}`);
    if (!res.ok) throw new Error("Error occured while fetching data :(");
    const data = await res.json();
    return data;
  }, []);

  const getUersFollowerInfo = useCallback(async (username) => {
    const followersRes = await fetch(
      `${BASE_URL}${username}/followers?per_page=100`
    );
    if (!followersRes.ok)
      throw new Error("Error occured while fetching data :(");
    const followersData = await followersRes.json();
    return followersData;
  }, []);

  const getAllReposInfo = useCallback(async (numPages, username) => {
    const reposinfo = [];
    for (let i = 1; i <= numPages; i++) {
      const res = await fetch(
        `${BASE_URL}${username}/repos?per_page=100&page=${i}`
      );
      const data = await res.json();

      for (let repo of data) {
        reposinfo.push({
          id: repo.id,
          name: repo.name,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language,
        });
      }
    }
    return reposinfo;
  }, []);

  useEffect(() => {
    (async () => {
      setIsloading(true);
      try {
        // Get basic user info
        const data = await getBasicUserData(userData.username);

        // Get user's followers info (capped to 100)
        const followersData = await getUersFollowerInfo(userData.username);
        const followersInfo = followersData.map((follower) => ({
          id: follower.id,
          username: follower.login,
          avatar: follower.avatar_url,
          url: follower.html_url,
        }));

        const fetchedUserData = {
          id: data.id,
          username: data.login,
          avatar: data.avatar_url,
          name: data.name,
          bio: data.bio,
          company: data.company,
          location: data.location,
          blog: data.blog,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          gists: data.public_gists,
          url: data.html_url,
          followersInfo,
        };

        // Get user's all repos info.
        fetchedUserData.reposinfo = await getAllReposInfo(
          Math.ceil(fetchedUserData.repos / 100),
          userData.username
        );
        setIsloading(false);

        dispatch({ type: "INITIALISE_USER_DATA", fetchedUserData });
        setError(null);
      } catch (error) {
        setIsloading(false);
        setError(error.message);
      }
    })();
  }, [
    userData.username,
    getBasicUserData,
    getAllReposInfo,
    getUersFollowerInfo,
  ]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://api.github.com/rate_limit");
      if (!res.ok) return;
      const data = await res.json();
      setRequestsRemaining({
        remaining: data.resources.core.remaining,
        max: data.resources.core.limit,
      });
    })();
  }, [userData.username]);

  return (
    <store.Provider
      value={{
        error,
        userData,
        dispatch,
        isLoading,
        requestsRemaining,
      }}
    >
      {props.children}
    </store.Provider>
  );
}
