import classes from "./DataCard.module.css";

export default function DataCard(props) {
  return (
    <div className={classes["data-card"]}>
      <div
        className={classes["icon"]}
        style={{
          backgroundColor: props["icon-bg-color"],
          color: props["icon-color"],
        }}
      >
        {props.icon}
      </div>
      <div className={classes["metric"]}>
        <span className={classes["metric-val"]}>{props.metricValue}</span>
        <span className={classes["metric-type"]}>{props.metricType}</span>
      </div>
    </div>
  );
}
