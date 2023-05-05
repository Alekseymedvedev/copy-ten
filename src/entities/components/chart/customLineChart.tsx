import React, {FC, useEffect, useState} from 'react';
import {CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Stack} from "@mui/material";
import CustomAxisTick from "./customAxisTick";
import CustomTooltip from "./customTooltip";


interface T {
    data: {}[];
    traderName?: any;
    colorYAxis?: string;
    colorYAxisRight?: string;
    colorXAxis?: string;
    height?: number;
    referenceLineData?: number;
    drawdownAndGain?: boolean;
}

const wrapperTooltipStyle = {
    padding: `8px 14px`,
    background: '#1F1F1F',
    border: `0.5px solid #3C3C3C`,
    borderRadius: `10px`,
    outline: 'none'
}
const contentTooltipStyle = {
    background: '#1F1F1F',
    padding: 0,
    border: 'none'
}

const CustomLineChart: FC<T> = ({
                                    data,
                                    colorYAxis,
                                    traderName,
                                    drawdownAndGain,
                                    height,
                                    referenceLineData
                                }) => {


    return (
        <Stack sx={{height: 230,mr:14}} >
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 15,
                        right: 0,
                        left: -35,
                        bottom: 15,
                    }}
                >
                    {referenceLineData && <ReferenceLine y={referenceLineData} stroke="#828282" strokeDasharray="3 3"/>}
                    <CartesianGrid stroke="#252525"/>
                    <YAxis dataKey="uv" stroke="#252525" tick={<CustomAxisTick color={colorYAxis} rotate={-35}/>}/>
                    <YAxis dataKey="uv" stroke="#252525" orientation="right"/>
                    <Tooltip content={<CustomTooltip
                        drawdownAndGain={drawdownAndGain} />}
                             contentStyle={contentTooltipStyle}
                             wrapperStyle={wrapperTooltipStyle}
                             offset={-50}
                    />
                    {
                        data &&
                            Object.keys(data[0]).map((item, index) =>
                                <Line
                                    key={index}
                                    dataKey={item}
                                    stroke={index > 0 ? '#6FCF97' : '#56CCF2'}
                                    dot={{r: 0}}/>
                            )

                    }

                </LineChart>
            </ResponsiveContainer>
        </Stack>
    );
};

export default CustomLineChart;