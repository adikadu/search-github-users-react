import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

export default function Pie3d({ graphData }) {
  const chartConfigs = {
    type: "pie3d",
    width: "100%",
    height: "500",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        theme: "fusion",
        paletteColors:
          "#0075c2,#1aaf5d,#f2c500,#b33dc6,#e60049,#003f5c,#ff6361,#6aaa96,#563243,#E2E062",
        captionFontSize: "1.8rem",
        captionFontColor: "#555",
        xAxisNameFontSize: "1.4rem",
        xAxisNameFontColor: "#555",
        yAxisNameFontSize: "1.4rem",
        yAxisNameFontColor: "#555",
        pieRadius: "40%",
        showPercentValues: 0,
      },
      data: graphData,
    },
  };

  return <ReactFC {...chartConfigs} />;
}
