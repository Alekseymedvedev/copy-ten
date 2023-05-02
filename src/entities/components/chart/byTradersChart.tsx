import React, {FC, useEffect, useState} from 'react';
import {alpha, Stack, styled, Switch} from "@mui/material";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, YAxis} from "recharts";
import CustomAxisTick from "./customAxisTick";
import {pink} from "@mui/material/colors";


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

const CustomSwitch = styled(Switch)(({theme, itemProp}) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: itemProp,
        '&:hover': {
            backgroundColor: alpha(itemProp ? itemProp : '#FFF', theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: itemProp,
    },
}));

interface IType {
    isTrader?: any;
    data?: any;
}

const ByTradersChart: FC<IType> = ({data}) => {
    const [traderArr, setTraderArr] = useState([''])
    useEffect(() => {
        if (data?.traders) {
            setTraderArr(Object.keys(data?.traders))
        }
    }, [])

    const HSLToRGB = (h: any, s: any, l: any) => {
        s /= 100;
        l /= 100;
        const k = (n: any) => (n + h / 30) % 12;
        const a = s * Math.min(l, 1 - l);
        const f = (n: any) =>
            l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
        return `rgb(${255 * f(0)}, ${255 * f(8)}, ${255 * f(4)})`;
    };
    const handleChangeTrader = (e: any,item:any,index:any) => {
        let arr = [...traderArr]
        if (!e.target.checked) {
            arr[index] = ''
            setTraderArr(arr)
        }
        if (e.target.checked && item) {
            arr[index] =item
            setTraderArr(arr)
        }
    }

    return (
        <Stack sx={{width: '100%',pr:14}}>
            {
                (data && data?.graph?.length > 0) &&

                <Stack sx={{height: 230}}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={data.graph}
                            margin={{
                                top: 15,
                                right: 0,
                                left: -35,
                                bottom: 15,
                            }}
                        >

                            <CartesianGrid stroke="#252525"/>
                            <YAxis dataKey={traderArr[1]} stroke="#252525" tick={<CustomAxisTick rotate={-35}/>}/>
                            <Tooltip contentStyle={contentTooltipStyle} wrapperStyle={wrapperTooltipStyle}
                                     offset={-50}/>
                            {
                                traderArr &&
                                traderArr.map((item, index) =>
                                    <Line
                                        key={index}
                                        dataKey={item}
                                        stroke={index > 0 ? HSLToRGB(index * 24, 50, 62) : '#56CCF2'}
                                        dot={{r: 0}}/>
                                )
                            }
                        </LineChart>
                    </ResponsiveContainer>
                </Stack>
            }

            {
                data?.traders &&
                <Stack sx={{pl: 14}}>
                    {
                        Object.keys(data?.traders).map((item: any, index: any) =>
                            <Stack key={index} direction="row" alignItems="center" justifyContent="space-between"
                                   spacing={4}>
                                <Stack className="subHeaders" direction="row" alignItems="center" spacing={4}>
                                    <span className="white-90">Трейдер {data?.traders[item].name}</span>
                                    <span className="green">&nbsp;+{data?.traders[item].gain}%</span>
                                </Stack>
                                <CustomSwitch
                                    onChange={
                                    (e) => handleChangeTrader(e, item, index)
                                }
                                    defaultChecked
                                    itemProp={index > 0 ? HSLToRGB(index * 24, 50, 62) : '#56CCF2'}/>
                            </Stack>
                        )
                    }
                </Stack>
            }
        </Stack>
    );
};

export default ByTradersChart;