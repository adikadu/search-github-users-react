import { useContext } from "react";
import store from "../../store/store";
import Pie3d from "../Charts/Pie3d";

export default function Languages() {
  const ctx = useContext(store);
  const reposInfo = ctx.userData.reposinfo;
  if (ctx.isLoading || !reposInfo) return;
  let graphData = {};
  reposInfo.forEach((repo) => {
    if (!repo.language) return;
    if (graphData.hasOwnProperty(repo.language)) graphData[repo.language] += 1;
    else graphData[repo.language] = 1;
  });
  graphData = Object.keys(graphData).map((language) => ({
    label: language,
    value: graphData[language],
  }));
  return <Pie3d graphData={graphData} />;
}
