import classes from "./Follower.module.css";

export default function Follower(props) {
  return (
    <div className={classes["folower"]}>
      <img src={props.avatar} alt={props.username} />
      <div className={classes["name-and-link"]}>
        <h3>{props.username}</h3>
        <a target="_blank" rel="noopener noreferrer" href={props.url}>
          {props.url}
        </a>
      </div>
    </div>
  );
}
