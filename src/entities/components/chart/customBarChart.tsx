import React, { FC } from 'react';
import {Bar, CartesianGrid, Legend, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis,BarChart} from 'recharts';
import {Stack} from "@mui/material";
import CustomAxisTick from "./customAxisTick";
import CustomTooltip from "./customTooltip";

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: -3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: -2000,
        pv: -9800,
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
        uv: -1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: -3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },{
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: -3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: -2000,
        pv: -9800,
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
        uv: -1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: -3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },{
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: -3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: -2000,
        pv: -9800,
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
        uv: -1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: -3800,
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
}
const wrapperTooltipStyle={
    padding:`8px 14px`,
    background:'#1F1F1F',
    border: `0.5px solid #3C3C3C`,
    borderRadius: `10px`,
    outline:'none'
}
const contentTooltipStyle={
    background:'#1F1F1F',
    padding:0,
    border:'none'
}
const CustomBarChart: FC<T> = ({children}) => {

    return (
        <Stack sx={{width: '100%', height: 230}}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    stackOffset="sign"
                    margin={{
                        top: 15,
                        right: 0,
                        left: -40,
                        bottom: 15,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#3c3c3c" />
                    <XAxis dataKey="name" tick={<CustomAxisTick/>} />
                    <YAxis  tick={<CustomAxisTick/>} />
                    <Tooltip contentStyle={contentTooltipStyle} wrapperStyle={wrapperTooltipStyle} offset={-60}/>
                    <ReferenceLine y={0} stroke="#3c3c3c" alwaysShow={true} isFront={true}/>
                    <Bar dataKey="pv" stackId="a" fill="#27AE60" />
                    <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                    {/*<Bar dataKey="uv" stackId="a" fill="#56CCF2" />*/}
                </BarChart>
            </ResponsiveContainer>
        </Stack>
    );
};

export default CustomBarChart;