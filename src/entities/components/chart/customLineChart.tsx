import React, {FC} from 'react';
import {Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Stack} from "@mui/material";
import CustomAxisTick from "./customAxisTick";

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

interface T {
    colorYAxis?: string;
    colorYAxisRight?: string;
    colorXAxis?: string;
    height?: number;
    referenceLineData?: number;
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

const CustomLineChart: FC<T> = ({colorYAxis, colorYAxisRight, colorXAxis, height, referenceLineData}) => {
    return (
        <Stack sx={{width: '100%', height: height ? height : 230, mb: 7}}>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 15,
                        right: -40,
                        left: -40,
                        bottom: 15,
                    }}
                >
                    {referenceLineData && <ReferenceLine y={referenceLineData}  stroke="#828282" strokeDasharray="3 3"/>}

                    <XAxis dataKey="name" tick={<CustomAxisTick color={colorYAxis}/>}/>
                    <YAxis dataKey="pv" tick={<CustomAxisTick color={colorYAxis} rotate={-35}/>}/>
                    <YAxis dataKey="uv" yAxisId="right" orientation="right"
                           tick={<CustomAxisTick color={colorYAxis} rotate={-35} x={5}/>}/>
                    <Tooltip contentStyle={contentTooltipStyle} wrapperStyle={wrapperTooltipStyle} offset={-50}/>
                    <Line dataKey="pv" stroke="#6FCF97" dot={{r: 0}}/>
                    <Line dataKey="uv" stroke="#56CCF2" dot={{r: 0}}/>
                </LineChart>
            </ResponsiveContainer>
        </Stack>
    );
};

export default CustomLineChart;