import React from "react";
import "./AttendanceGroup.css";
//import { Chart } from "react-google-charts";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
import cylinder from "highcharts/modules/cylinder";
highcharts3d(Highcharts);
cylinder(Highcharts);

export default function AttendanceGraph() {
  const options = {
    chart: {
      renderTo: "container",
      type: "column",

      options3d: {
        enabled: true,
        alpha: 9,
        beta: 32,
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
      text: "Subject Wise 1st Internal Marks",
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
        depth: 25,
        colorByPoint: true,
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
          ["DAA", 27],
          ["Os", 28],

          ["MATHS", 30],
          ["DC", 22],
          ["MC&ES", 25],
          ["SE", 24],
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
