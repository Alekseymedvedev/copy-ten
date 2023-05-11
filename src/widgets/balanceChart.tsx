import React, {FC, useEffect, useState} from 'react';
import {Chip, Stack, Switch} from "@mui/material";
import CustomLineChart from "../entities/components/chart/customLineChart";


interface IType {
    data?:any;
    isTrader?: any;
    description?: 'label' | 'swift';
    additionLabel?: boolean;
    removeLabel?: boolean;
    transactionLabel?: boolean;
    drawdownAndGain?: boolean;
}

const BalanceChart: FC<IType> = ({
                                     data,
                                     description,
                                     isTrader,
                                     drawdownAndGain,
                                     additionLabel,
                                     removeLabel,
                                     transactionLabel
                                 }) => {

    const [traderArr,setTraderArr]=useState([''])
    useEffect(()=>{
        if(data && isTrader){
            setTraderArr(Object.keys(data?.traders))
        }
    },[])
    return (
        <Stack sx={{width: '100%'}}>
            {
                (data && data?.length > 0) && <CustomLineChart drawdownAndGain={drawdownAndGain} data={data} traderName={traderArr}/>
            }

            {
                isTrader &&
                <Stack sx={{pl: 14}}>
                    {
                        Object.values(data?.traders).map((item:any)=>
                            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={4}>
                                <Stack className="subHeaders" direction="row" alignItems="center" spacing={4}>
                                    <span className="white-90">Трейдер {item.name}</span>
                                    <span className={item.gain > 0 ?"green": "red"}>&nbsp;{item.gain}%</span>
                                </Stack>
                                <Switch defaultChecked color="secondary"/>
                            </Stack>
                        )
                    }
                </Stack>
            }
        </Stack>
    );
};

export default BalanceChart;