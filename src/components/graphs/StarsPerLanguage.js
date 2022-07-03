import { useContext } from "react";
import store from "../../store/store";
import Doughnut3d from "../Charts/Doughnut3d";

export default function StarsPerLanguage() {
  const ctx = useContext(store);
  const reposInfo = ctx.userData.reposinfo;
  if (ctx.isLoading || !reposInfo) return;
  let graphData = {};
  reposInfo.forEach((repo) => {
    if (!repo.language) return;
    if (graphData.hasOwnProperty(repo.language))
      graphData[repo.language] += repo.stars;
    else graphData[repo.language] = repo.stars;
  });
  graphData = Object.keys(graphData).map((language) => ({
    label: language,
    value: graphData[language],
  }));
  console.log("graphData", graphData);
  return <Doughnut3d graphData={graphData} />;
}
