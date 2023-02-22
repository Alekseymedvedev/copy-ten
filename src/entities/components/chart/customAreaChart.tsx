import React, {FC} from 'react';
import {Stack} from "@mui/material";
import {Area, AreaChart, ResponsiveContainer} from "recharts";


interface IdataArea{
    dataKey:string;
    stroke:string;
    fill:string;
}
interface IType {
    height: number;
    data: {}[];
    dataArea:IdataArea[];

}

const CustomAreaChart: FC<IType> = ({height,data,dataArea}) => {
    return (
        <Stack sx={{width: '100%', height: {height}}}>
            <ResponsiveContainer>
                <AreaChart data={data} >
                    {
                        dataArea && dataArea.map(item=>
                            <Area key={item.dataKey+item.dataKey} dataKey={item.dataKey} stroke={item.stroke} fill={item.fill}/>
                        )
                    }
                </AreaChart>
            </ResponsiveContainer>
        </Stack>
    );
};

export default CustomAreaChart;