import classes from "./User.module.css";
import { FaRegBuilding } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FiLink2 } from "react-icons/fi";

import store from "../store/store";
import { useContext } from "react";

export default function User() {
  const ctx = useContext(store);
  return (
    <div className={classes["user"]}>
      <div className={classes["user-info-btn-follow"]}>
        <div className={classes["user-info"]}>
          <img src={ctx.userData.avatar} alt={ctx.userData.name} />
          <div className={classes["name-username"]}>
            <h3>{ctx.userData.name}</h3>
            <span>{ctx.userData.username}</span>
          </div>
        </div>
        <a className={classes["btn-follow"]} href={ctx.userData.url}>
          Follow
        </a>
      </div>
      <p className={classes["user-desc"]}>{ctx.userData.bio}</p>
      <ul>
        {ctx.userData.company && ctx.userData.company.length > 0 && (
          <li>
            <FaRegBuilding /> {ctx.userData.company}
          </li>
        )}
        {ctx.userData.location && ctx.userData.location.length > 0 && (
          <li>
            <MdLocationOn /> {ctx.userData.location}
          </li>
        )}
        {ctx.userData.blog && ctx.userData.blog.length > 0 && (
          <li>
            <FiLink2 /> <a href={ctx.userData.blog}>{ctx.userData.blog}</a>
          </li>
        )}
      </ul>
    </div>
  );
}
