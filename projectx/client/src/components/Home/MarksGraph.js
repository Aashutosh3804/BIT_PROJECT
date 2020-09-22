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
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 60,
        beta: 0,
      },
    },
    title: {
      text: "Subject Wise 1st Internal Marks",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        depth: 35,
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
    },
    series: [
      {
        type: "pie",
        name: "Marks Scored",
        data: [
          {
            name: "DAA",
            y: 27,
            sliced: true,
            selected: true,
          },
          ["OS", 26],

          ["MATHS", 30],
          {
            name: "DC",
            y: 25,
            sliced: true,
            selected: true,
          },
          ["MC&ES", 25],
          ["SE", 23],
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
