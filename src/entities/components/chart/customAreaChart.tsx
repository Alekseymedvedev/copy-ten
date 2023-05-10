import React, {FC} from 'react';
import {Stack} from "@mui/material";
import {Area, AreaChart, ResponsiveContainer} from "recharts";

interface IDataArea {
    dataKey: string;
    stroke: string;
    fill: string;
}

interface IType {
    height?: number;
    data?: {}[];
    dataArea?: IDataArea[];

}

const CustomAreaChart: FC<IType> = ({height, data, dataArea}) => {

    return (
        <Stack sx={{width: '100%', height: {height}}} overflow="hidden">
            <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <Area dataKey="uv" stroke="#6FCF97" fill="#29312C"/>
                    {/*{*/}
                    {/*    dataArea && dataArea.map(item =>*/}
                    {/*        <Area key={item.dataKey + item.dataKey} dataKey="uv" stroke={item.stroke}*/}
                    {/*              fill={item.fill}/>*/}
                    {/*    )*/}
                    {/*}*/}
                </AreaChart>
            </ResponsiveContainer>
        </Stack>
    );
};

export default CustomAreaChart;