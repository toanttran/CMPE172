import React, { useContext } from "react";
// import Chart from 'react-apexcharts'
import ReactApexChart from "react-apexcharts";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import someContexts from "./makeContext";

export default function Analytic() {
  const context = useContext(someContexts);
  let history = useHistory();
  const goAdd = () => history.push("/addFlight");
  const goAnalytic = () => history.push("/analytic");
  const goData = () => history.push("/");
  const series = [
    {
      name: "Numbers of Flights",
      data: context.numberFlight,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Peak time of Departure",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    yaxis: [
      {
        title: {
          text: "Number of Flights",
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: "15px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 600,
            cssClass: "apexcharts-yaxis-title",
          },
        },
      },
    ],
    xaxis: {
      categories: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7","8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
      ],
    },
  };

  return (
    <div>
      <div className="buttonBar makespaceButtom makespacetop">
        <div className="inlineBlock">
          <Button
            variant="contained"
            color="secondary"
            className=""
            onClick={goAdd}
          >
            Add Flight
          </Button>
        </div>
        <div className="inlineBlock makeSpace">
          <Button
            variant="contained"
            color="secondary"
            className=""
            onClick={goAnalytic}
          >
            Analytics
          </Button>
        </div>
        <div className="inlineBlock makeSpace">
          <Button
            variant="contained"
            color="secondary"
            className=""
            onClick={goData}
          >
            All Flights
          </Button>
        </div>
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
}

// export default Analytic;
