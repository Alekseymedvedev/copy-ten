import React, { FC } from 'react';
import {Bar, CartesianGrid, Legend, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis,BarChart} from 'recharts';
import {Stack} from "@mui/material";
import CustomAxisTick from "./customAxisTick";



interface T {
    barChartData?: any
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
const CustomBarChart: FC<T> = ({barChartData}) => {


    return (
        <Stack sx={{width: '100%', height: 230}}>
            <ResponsiveContainer>
                <BarChart
                    data={barChartData}
                    stackOffset="sign"
                    maxBarSize={20}
                    barCategoryGap={2}
                    barGap={2}
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
                    <Bar dataKey="pv" stackId={1} fill="#6FCF97" isAnimationActive={false} />
                    <Bar dataKey="uv"  stackId={1} fill="#FF8888"/>

                </BarChart>
            </ResponsiveContainer>
        </Stack>
    );
};

export default CustomBarChart;