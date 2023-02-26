import React, {FC} from 'react';
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
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
    children?: any
    height?: number
}


const CustomLineChart: FC<T> = ({children, height}) => {
    return (
        <Stack sx={{width: '100%', height: height ? height : 230}}>
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
                    <XAxis dataKey="name" tick={<CustomAxisTick/>}/>
                    <YAxis dataKey="pv" tick={<CustomAxisTick/>}/>
                    <YAxis dataKey="uv" yAxisId="right" orientation="right" tick={<CustomAxisTick/>}/>
                    <Tooltip/>
                    <Line dataKey="pv" stroke="#6FCF97" activeDot={{width: 0}}/>
                    <Line dataKey="uv" stroke="#56CCF2"/>
                </LineChart>
            </ResponsiveContainer>
        </Stack>
    );
};

export default CustomLineChart;