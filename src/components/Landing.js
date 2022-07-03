import classes from "./Landing.module.css";
import BackgroundImage from "../images/login-img.svg";

export default function Landing() {
  return (
    <div className={classes["landing"]}>
      <img src={BackgroundImage} alt="Login" />
      <h1>Github User</h1>
      <button>log in / sign up</button>
    </div>
  );
}
