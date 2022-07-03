import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

export default function Bar3d({ graphData }) {
  const chartConfigs = {
    type: "bar3d",
    width: "100%",
    height: "500",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Forked",
        xAxisName: "Repos",
        yAxisName: "Forks",
        theme: "fusion",
        paletteColors: "#0075c2,#1aaf5d,#f2c500,#b33dc6, #e60049",
        captionFontSize: "1.8rem",
        captionFontColor: "#555",
        xAxisNameFontSize: "1.4rem",
        xAxisNameFontColor: "#555",
        yAxisNameFontSize: "1.4rem",
        yAxisNameFontColor: "#555",
        chartLeftMargin: 0,
        yAxisNamePadding: 0,
        xAxisNamePadding: 0,
        animationDuration: 3,
      },
      data: graphData,
    },
  };

  return <ReactFC {...chartConfigs} />;
}
