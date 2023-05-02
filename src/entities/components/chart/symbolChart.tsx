import React, {FC, useEffect, useState} from 'react';
import {Divider, Stack, Switch, useMediaQuery} from "@mui/material";
import {Bar, BarChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import CustomAxisTick from "./customAxisTick";
import Chart from "./chart";
import SwitchList from "../switchList";
import HeaderChart from "../../../shared/components/headerChart";
import Paper from "@mui/material/Paper";

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

interface IType {
    data?: any
}

const SymbolChart: FC<IType> = ({data}) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    const [barData, setBarData] = useState<any>([])
    useEffect(() => {
        if (data) setBarData(data)
    }, [data])
    const handlerSwitch = (e: any, id: any, item: any, index: any) => {
        if (!e.target.checked) {
            const arr = barData.filter((item: any) => item.id !== id)
            setBarData(arr)
        }
        if (e.target.checked && item) {
            setBarData([...barData, item])
        }
    }
    return (

        <Stack spacing={7} direction={mediaQuery ? "row" : "column"}
               justifyContent="space-between">

            <Paper sx={{
                flexGrow: 1, "@media (min-width:900px)": {
                    padding: `14px 4px`,
                }
            }}>
                <HeaderChart title="График"/>
                <Stack sx={{width: '100%', height: 260}}>
                    <ResponsiveContainer>
                        <BarChart
                            data={barData}
                            stackOffset="sign"
                            maxBarSize={20}
                            barCategoryGap={2}
                            barGap={2}
                            margin={{
                                top: 0,
                                right: 0,
                                left: -30,
                                bottom: 0,
                            }}
                        >
                            {/*tick={<CustomAxisTick/>}*/}
                            <CartesianGrid strokeDasharray="3 3" stroke="#3c3c3c"/>
                            <XAxis dataKey="name" tick={<CustomAxisTick textAnchor="middle"/>}  interval={0}/>
                            <YAxis tick={<CustomAxisTick rotate={-30}/>}/>
                            <Tooltip contentStyle={contentTooltipStyle} wrapperStyle={wrapperTooltipStyle}
                                     offset={-60}/>
                            <ReferenceLine y={0} stroke="#3c3c3c" alwaysShow={true} isFront={true}/>
                            <Bar dataKey="pv" stackId={1} fill="#6FCF97" isAnimationActive={false}/>
                            <Bar dataKey="uv" stackId={1} fill="#FF8888"/>
                        </BarChart>
                    </ResponsiveContainer>
                </Stack>
            </Paper>
            <Stack sx={{
                padding: `14px`,
                background: `linear-gradient(180deg, rgba(31, 31, 31, 0) 0%, #1F1F1F 100%)`,
                border: `0.5px solid #3C3C3C`,
                borderRadius: 2.5,
                flexGrow: 1,
                maxWidth: mediaQuery ? 220 : `100%`,
                width: `100%`,
                maxHeight: 315,
                overflow: 'hidden',
                overflowY: 'scroll'
            }}
            >

                <Stack mb={4} className="subheaders white-90">{data.length} Инстр.</Stack>
                <Divider sx={{mb: 4}}/>
                <Stack spacing={6}>

                    {
                        data && data.map((item: any, index: any) =>
                            <Stack
                                key={item.id}
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                sx={{
                                    padding: `12px 8px`,
                                    border: `0.5px solid #3C3C3C`,
                                    borderRadius: 2.5,
                                }}
                            >
                            <span className="subHeaders">
                                <span className="white-100">{item.name}</span>
                                {/*<span className="green">&nbsp;+{item.value}%</span>*/}
                            </span>
                                <Switch id={`item.id`} value={item.pv} defaultChecked size="small" onChange={(e) => {
                                    handlerSwitch(e, item.id, item, index)
                                }}/>
                            </Stack>
                        )
                    }

                </Stack>
            </Stack>
        </Stack>

    );
};

export default SymbolChart;