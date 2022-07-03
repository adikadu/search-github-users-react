import { useContext } from "react";
import store from "../../store/store";
import Column3d from "../Charts/Column3d";

export default function MostPopular() {
  const ctx = useContext(store);
  const reposInfo = ctx.userData.reposinfo;
  if (ctx.isLoading || !reposInfo) return;
  reposInfo.sort((a, b) => b.stars - a.stars);
  let graphData = reposInfo.slice(0, 5);
  graphData = graphData.map((repo) => ({
    label: repo.name,
    value: repo.stars,
  }));

  return <Column3d graphData={graphData} />;
}
