import React, {FC} from 'react';
import {PureComponent} from 'react';
import {Area, LineChart, AreaChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {chartData} from "../data/chart";
import {Chip, Stack} from "@mui/material";
import IconArrow from "../shared/assets/images/icons/iconArrow";
import CustomLineChart from "../entities/components/chart/customLineChart";
import HeaderChart from "../shared/components/headerChart";


interface IType {
    children?: any;
    description?: 'label' | 'swift';
}

const BalanceChart: FC<IType> = ({children,  description}) => {
    return (
        <Stack>
            <Stack sx={{width: '100%'}}>

                <CustomLineChart/>

                {
                    description === "label" &&
                    <Stack spacing={2}>
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <Chip variant="filled" color="success" sx={{padding: 0, width: 28, height: 8}}/>
                            <span className="white-90">Пополнение</span>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <Chip variant="filled" color="error" sx={{padding: 0, width: 28, height: 8}}/>
                            <span className="white-90">Снятие</span>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <Chip variant="filled" color="info" sx={{padding: 0, width: 28, height: 8}}/>
                            <span className="white-90">Сделки</span>
                        </Stack>
                    </Stack>
                }
                {
                    description === "swift" &&
                    <Stack spacing={2}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={4}>
                            <Stack direction="row" alignItems="center" spacing={4}>
                                <span className="white-90">Трейдер Nickname_Nickname</span>
                                <span className="green">&nbsp;+5.19%</span>
                            </Stack>
                        </Stack>
                    </Stack>
                }

            </Stack>
        </Stack>
    );
};

export default BalanceChart;