import React from "react";
import "./AttendanceGroup.css";
//import { Chart } from "react-google-charts";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
highcharts3d(Highcharts);

export default function AttendanceGraph() {
  const options = {
    chart: {
      renderTo: "container",
      type: "column",

      options3d: {
        enabled: true,
        alpha: 10,
        beta: 15,
        depth: 50,
        viewDistance: 25,
      },
      backgroundColor: {
        linearGradient: [0, 0, 500, 500],
        stops: [
          [0, "rgb(18,18,18)"],
          [1, "rgb(18,18,18)"],
        ],
      },
    },
    title: {
      text: "Chart rotation demo",
    },
    tooltip: {
      headerFormat: "<b>{point.key}</b><br>",
      pointFormat:
        '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}',
    },
    subtitle: {
      text: "Test options by dragging the sliders below",
    },
    plotOptions: {
      column: {
        depth: 25,
      },
    },
    xAxis: {
      categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"],
      labels: {
        skew3d: true,
        style: {
          fontSize: "16px",
        },
      },
    },
    series: [
      {
        type: "column",
        name: "Browser share",
        data: [
          ["Firefox", 45.0],
          ["IE", 26.8],

          ["Safari", 8.5],
          ["Opera", 6.2],
          ["Others", 0.7],
        ],
      },
    ],
  };

  return (
    // <div className={"my-pretty-chart-container"}>
    // <Chart
    //   width={"600px"}
    //   height={"400px"}
    //   chartType="ColumnChart"
    //   loader={<div>Loading Chart</div>}
    //   data={[
    //     ["Age", "Weight"],
    //     [8, 12],
    //     [4, 5.5],
    //     [11, 14],
    //     [4, 5],
    //     [3, 3.5],
    //     [6.5, 7],
    //   ]}
    //   options={{
    //     title: "Age vs. Weight comparison",
    //     hAxis: { title: "Age", minValue: 0, maxValue: 15 },
    //     vAxis: { title: "Weight", minValue: 0, maxValue: 15 },
    //     legend: "none",
    //     animation: {
    //       startup: true,
    //       easing: "linear",
    //       duration: 1500,
    //     },
    //     enableInteractivity: false,
    //   }}
    //   chartEvents={[
    //     {
    //       eventName: "animationfinish",
    //       callback: () => {
    //         console.log("Animation Finished");
    //       },
    //     },
    //   ]}
    //   rootProps={{ "data-testid": "2" }}
    // />
    //  </div>
    <div style={{ width: "600px" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
