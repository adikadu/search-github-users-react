import classes from "./Error.module.css";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className={classes["error"]}>
      <h1>404</h1>
      <p>Sorry, The Page You Tried Cannot Be Found</p>
      <Link to="/">back home</Link>
    </div>
  );
}
