import classes from "./Graphs.module.css";
import Languages from "./graphs/Languages";
import MostPopular from "./graphs/MostPopular";
import StarsPerLanguage from "./graphs/StarsPerLanguage";
import MostForked from "./graphs/MostForked";

export default function Graphs() {
  return (
    <div className={classes["graphs"]}>
      <Languages />
      <MostPopular />
      <StarsPerLanguage />
      <MostForked />
    </div>
  );
}
