import React from "react";


const CustomAxisTick = ({payload, x, y, color,rotate}: any) => {
    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={0}
                y={0}
                dy={16}
                textAnchor="end"
                fill={color ? color : "#56CCF2"}
                transform="rotate(-35)"
                fontSize="8px"
            >
                {payload.value}
            </text>
        </g>
    );
}


export default CustomAxisTick;
