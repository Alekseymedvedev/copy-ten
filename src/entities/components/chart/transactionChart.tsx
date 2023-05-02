import React, {FC, useEffect, useMemo, useState} from 'react';
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Chip, Stack} from "@mui/material";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface IType {
    balanceChartData?: any
}

const TransactionChart: FC<IType> = ({balanceChartData}) => {

    const skipped = (ctx: any) => {
        console.log(ctx)
        return ctx.p1.raw.type == 0 ? '#56CCF2' : ctx.p1.raw.type == 1 ? '#6FCF97' : '#FF8888'

    };
    return (
        <>
            <Line
                options={{
                    plugins: {
                        legend: {
                            display: false
                        },

                    },
                    scales: {
                        x: {
                            position: 'left' as const,
                            ticks: {
                                maxRotation: 0,
                            }
                        },
                        y: {
                            display: true,
                            position: 'left' as const,
                            ticks: {
                                color: '#6FCF97',
                                minRotation: 25
                            }
                        },
                        // y1: {
                        //     type: 'linear' as const,
                        //     display: true,
                        //     position: 'right' as const,
                        //     ticks: {
                        //         color: '#56CCF2',
                        //         minRotation: -25,
                        //         padding: 14
                        //     }
                        // },
                    },
                }}

                data={{
                    labels: [],
                    datasets: [{
                        data: balanceChartData?.map((item: any, index: any) => ({x: ' '.repeat(index) , type: item.type, value: item.value})
                        ),
                        //     [
                        //     {x: 'Октябр1111', type: -1, value: 50},
                        //     {x: ' ', type: 0, value: 75},
                        //     {x: '   ', type: 1, value: 105},
                        //     {x: '    ', type: -1, value: 435},
                        //     {x: '      ', type: -1, value: 435},
                        //     {x: '       ', type: -1, value: 435},
                        //     {x: '        ', type: -1, value: 2435},
                        //     {x: '         ', type: -1, value: 1435},
                        //     {x: '          ', type: -1, value: 3435},
                        //     {x: '           ', type: -1, value: 4435},
                        //     {x: '            ', type: -1, value: 5435},
                        //     {x: '             ', type: -1, value: 6435},
                        //     {x: 'Октябрь 2222', type: 0, value: 335},
                        // ],
                        borderColor: '#FF8888',
                        pointBorderColor: 'transparent',
                        borderWidth:1,
                        backgroundColor:'transparent',
                        segment: {
                            borderColor: ctx => skipped(ctx),
                            borderWidth: 1,
                        },
                        spanGaps: false,
                        parsing: {
                            yAxisKey: 'value'
                        }
                    }],
                }}
            />

                <Stack spacing={2} sx={{ pr:14,pl:14}}>
                    <Stack direction="row" alignItems="center" spacing={4}>
                        <Chip variant="filled" color="success" sx={{padding: 0, width: 28, height: 8,backgroundColor:'#6FCF97'}}/>
                        <span className="subHeaders white-90">Пополнение</span>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={4}>
                        <Chip variant="filled" color="error" sx={{padding: 0, width: 28, height: 8}}/>
                        <span className="subHeaders white-90">Снятие</span>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={4}>
                        <Chip variant="filled" color="info" sx={{padding: 0, width: 28, height: 8}}/>
                        <span className="subHeaders white-90">Сделки</span>
                    </Stack>
                </Stack>
        </>
    );
};

export default TransactionChart;