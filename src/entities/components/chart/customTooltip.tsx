import React, {FC} from 'react';
import {Stack} from "@mui/material";

interface IType {
    active?: any;
    payload?: any;
    label?: any;
}

const CustomTooltip = ({ active, payload, byTradersChart,label,barChart,drawdownAndGain }:any) => {
    console.log(drawdownAndGain)
    if (active && payload && payload?.length) {
        return (
            <div className="custom-tooltip">

                {
                    !byTradersChart &&
                    <Stack className={barChart ? "green":"blue"}>
                        {drawdownAndGain && "Баланс: " }
                        {payload[0]?.value}
                    </Stack>
                }

                {
                    (payload.length >1 && !byTradersChart) &&
                    <Stack className={barChart ? "red":"green"}>
                        {drawdownAndGain && "Средства: " }
                        {payload[1]?.value}
                    </Stack>
                }
                {
                    byTradersChart &&
                    byTradersChart.map((item:any,index:any)=>
                        <Stack key={index} sx={{color:item}}>
                            {payload[index]?.value}
                        </Stack>
                    )
                }
                {
                    barChart &&
                    <Stack>{label}</Stack>
                }
            </div>
        );
    }

    return null;
};

export default CustomTooltip;