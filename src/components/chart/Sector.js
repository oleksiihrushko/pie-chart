import React, { useState } from "react";

const Sector = ({ idx, params, lines, textCoords, value, color }) => {
  const [isShowDescr, setIsShowDescr] = useState(false);

  return (
    <>
      <path
        d={params[idx]}
        fill={color}
        onMouseEnter={() => setIsShowDescr(true)}
        onMouseLeave={() => setIsShowDescr(false)}
      ></path>
      {isShowDescr && (
        <>
          <path
            d={lines[idx]}
            stroke={color}
            strokeWidth="0.5"
            fill={color}
          ></path>
          <text
            x={textCoords[idx][0]}
            y={textCoords[idx][1]}
            width="100%"
            fontSize="10"
            style={{
              textDecoration: "underline",
            }}
            fill={color}
            textAnchor={`${textCoords[idx][0] < 0 ? "end" : "start"}`}
          >
            {value[0]}: {value[1]}
          </text>
        </>
      )}
    </>
  );
};

export default Sector;
