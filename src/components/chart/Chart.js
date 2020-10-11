import React from "react";
import { Link, Redirect } from "react-router-dom";
import Sector from "./Sector";

const Chart = ({ inputValues }) => {
  let cumulativePercent = 0;
  const percents = [];
  const lines = [];
  const params = [];
  const textCoords = [];

  //give percentage to all items
  const summaryValue = inputValues.reduce((acc, value) => (acc += value[1]), 0);
  inputValues.forEach((value) => percents.push(value[1] / summaryValue));

  function getCoordinatesForPercent(percent) {
    const x = 100 * Math.cos(2 * Math.PI * percent);
    const y = 100 * Math.sin(2 * Math.PI * percent);
    return [x, y];
  }

  percents.forEach((percent) => {
    //start point of drawing sector
    const [startX, startY] = getCoordinatesForPercent(cumulativePercent);

    const [middleX, middleY] = getCoordinatesForPercent(
      cumulativePercent === 0
        ? percent / 2
        : (2 * cumulativePercent + percent) / 2
    );

    // each percent starts where the last percent ended, so keep a cumulative percent
    cumulativePercent += percent;

    const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

    // if the percent is more than 50%, take the large arc (the long way around)
    const largeArcFlag = percent > 0.5 ? 1 : 0;

    // create an array and join it just for code readability
    const pathData = [
      `M ${startX} ${startY}`, // Move
      `A 100 100 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
      `L 0 0`, // Line
    ].join(" ");

    // create data for description render
    const lineData = [
      `M ${middleX} ${middleY}`,
      `L ${middleX * 1.2} ${middleY * 1.2}`,
    ].join(" ");

    params.push(pathData);
    lines.push(lineData);
    textCoords.push([middleX * 1.2, middleY * 1.2 - 1]);
  });

  return (
    <div className="Chart">
      {inputValues[0][0].length === 0 && <Redirect to="/" />}
      <Link to="/">To form</Link>
      <svg viewBox="-200 -200 400 400">
        {inputValues.map((value, idx) => (
          <Sector
            key={idx}
            idx={idx}
            params={params}
            lines={lines}
            textCoords={textCoords}
            value={value}
            color={`hsla(${Math.random() * 360}, 100%, 50%, 1)`} //or another random color function
          />
        ))}
      </svg>
    </div>
  );
};

export default Chart;
