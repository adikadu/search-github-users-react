import classes from "./Home.module.css";
import { FaSearch } from "react-icons/fa";
import { RiGitRepositoryFill } from "react-icons/ri";
import {
  BsPeopleFill,
  BsFillPersonPlusFill,
  BsFillFileCodeFill,
} from "react-icons/bs";

import store from "../store/store";
import { useContext, Fragment, useRef } from "react";

import DataCard from "./UI/DataCard";
import User from "./User";
import Followers from "./Followers";
import Loading from "./UI/Loading";
import Graphs from "./Graphs";

export default function Home() {
  const ctx = useContext(store);
  const inpRef = useRef();
  if (ctx.isLoading) return <Loading />;
  let userContent;
  if (ctx.error)
    userContent = <h1 className={classes["error"]}>{ctx.error}</h1>;
  else {
    userContent = (
      <Fragment>
        <div className={classes["data-cards"]}>
          <DataCard
            icon={<RiGitRepositoryFill />}
            icon-bg-color="rgb(255, 224, 240)"
            icon-color="rgb(218, 74, 145)"
            metricValue={ctx.userData.repos}
            metricType="Repos"
          />
          <DataCard
            icon={<BsPeopleFill />}
            icon-bg-color="#e0fcff"
            icon-color="#2caeba"
            metricValue={ctx.userData.followers}
            metricType="Followers"
          />
          <DataCard
            icon={<BsFillPersonPlusFill />}
            icon-bg-color="rgb(230, 230, 255)"
            icon-color="rgb(93, 85, 250)"
            metricValue={ctx.userData.following}
            metricType="Following"
          />
          <DataCard
            icon={<BsFillFileCodeFill />}
            icon-bg-color="rgb(250, 241, 202)"
            icon-color="rgb(240, 180, 41)"
            metricValue={ctx.userData.gists}
            metricType="Gists"
          />
        </div>
        <div className={classes["user-followers"]}>
          <User />
          <Followers />
        </div>
      </Fragment>
    );
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const inpVal = inpRef.current.value;
    inpRef.current.value = "";
    if (!inpVal) return;
    ctx.dispatch({ type: "UPDATE_USER", username: inpVal });
  };

  return (
    <div className={classes["container"]}>
      <div className={classes["home-top"]}>
        <form onSubmit={formSubmitHandler}>
          <FaSearch />
          <input ref={inpRef} type="text" placeholder="enter github user" />
          <button type="submit">Search</button>
        </form>
        <p className={classes["requests"]}>
          Requests : <span>{ctx.requestsRemaining.remaining}</span> /{" "}
          <span>{ctx.requestsRemaining.max}</span>
        </p>
      </div>
      {userContent}
      <Graphs />
    </div>
  );
}
