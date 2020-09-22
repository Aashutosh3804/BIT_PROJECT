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
        alpha: 20,
        beta: 20,
        depth: 100,
        viewDistance: 25,
      },
      //   backgroundColor: {
      //     linearGradient: [0, 0, 500, 500],
      //     stops: [
      //       [0, "rgb(18,18,18)"],
      //       [1, "rgb(18,18,18)"],
      //     ],
      //   },
    },
    title: {
      text: "Subject Wise Attendance",
    },
    tooltip: {
      headerFormat: "<b>{point.key}</b><br>",
      pointFormat:
        '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}',
    },
    // subtitle: {
    //   text: "Test options by dragging the sliders below",
    // },
    plotOptions: {
      column: {
        depth: 50,
      },
    },
    xAxis: {
      categories: ["DAA", "OS", "MATHS", "DC", "MC&ES", "SE"],
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
        name: "Attendance",
        data: [
          ["DAA", 80.0],
          ["Os", 81.8],

          ["MATHS", 85.5],
          ["DC", 76.2],
          ["MC&ES", 70.7],
          ["SE", 77.5],
        ],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
