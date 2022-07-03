import { createContext } from "react";

const store = createContext({
  isLoading: false,
  error: null,
  requestsRemaining: {
    remaining: 58,
    max: 60,
  },
  dispatch: () => {},
  userData: {
    id: null,
    username: "",
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
  },
});

export default store;
