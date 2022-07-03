import { useContext } from "react";
import store from "../../store/store";
import Bar3d from "../Charts/Bar3d";

export default function MostForked() {
  const ctx = useContext(store);

  const reposInfo = ctx.userData.reposinfo;
  if (ctx.isLoading || !reposInfo) return;
  reposInfo.sort((a, b) => b.forks - a.forks);
  let graphData = reposInfo.slice(0, 5);
  graphData = graphData.map((repo) => ({
    label: repo.name,
    value: repo.forks,
  }));

  return <Bar3d graphData={graphData} />;
}
