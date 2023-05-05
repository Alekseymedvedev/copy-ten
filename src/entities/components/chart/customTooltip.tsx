import React, {FC} from 'react';
import {Stack} from "@mui/material";

interface IType {
    active?: any;
    payload?: any;
    label?: any;
}

const CustomTooltip = ({ active, payload, byTradersChart,label,barChart }:any) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">

                {
                    !byTradersChart &&
                    <Stack className="blue">${payload[0].value}</Stack>
                }

                {
                    (payload.length >1 && !byTradersChart) &&
                    <Stack className="green">${payload[1].value}</Stack>
                }
                {
                    byTradersChart &&
                    byTradersChart.map((item:any,index:any)=>
                        <Stack sx={{color:item}}>${payload[index].value}</Stack>
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