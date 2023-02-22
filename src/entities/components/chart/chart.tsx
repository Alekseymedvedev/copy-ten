import React, {FC} from 'react';
import HeaderChart from "../../../shared/components/headerChart";
import {Stack} from "@mui/material";

interface T {
    children?: any;
    title?: string;
    date?: boolean;
    select?: boolean;
    selectTitle?: string;
    number?: string;
    icon?: string;
}

const Chart: FC<T> = ({
                          children,
                          title,
                          date,
                          select,
                          selectTitle,
                          number,
                          icon
                      }) => {
    return (
        <Stack sx={{
            padding: `20px 28px`,
            background: `linear-gradient(180deg, rgba(31, 31, 31, 0) 0%, #1F1F1F 100%)`,
            border: `0.5px solid #3C3C3C`,
            borderRadius: 2.5,
            flexGrow: 1
        }}>
            <HeaderChart title={title} icon={icon} selectTitle={selectTitle} select={select} number={number}/>
            {children}
        </Stack>
    );
};

export default Chart;