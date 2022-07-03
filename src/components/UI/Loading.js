import classes from "./Loading.module.css";
import spinner from "../../images/preloader.gif";

export default function Loading() {
  return <img className={classes["loading"]} src={spinner} alt="Loading..." />;
}
