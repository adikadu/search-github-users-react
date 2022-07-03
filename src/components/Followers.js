import classes from "./Followers.module.css";
import Follower from "./Follower";
import store from "../store/store";
import { useContext } from "react";

export default function Followers() {
  const ctx = useContext(store);
  return (
    <div className={classes["container-followers"]}>
      <div className={classes["followers"]}>
        {ctx.userData.followersInfo.map((follower) => (
          <Follower
            key={follower.id}
            avatar={follower.avatar}
            username={follower.username}
            url={follower.url}
          />
        ))}
      </div>
    </div>
  );
}
