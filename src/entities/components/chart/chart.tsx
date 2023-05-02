import React, {FC} from 'react';
import HeaderChart from "../../../shared/components/headerChart";
import {Stack} from "@mui/material";
import Paper from "@mui/material/Paper";

interface T {
    children?: any;
    title?: string;
    changeTime?: any;
    select?: boolean;
    selectTitle?: string;
    defaultValue?: string;
    number?: string;
    icon?: 'bad' | 'good';
}

const Chart: FC<T> = ({
                          children,
                          title,
                          changeTime,
                          select,
                          selectTitle,
                          defaultValue,
                          number,
                          icon
                      }) => {
    return (
        <Paper sx={{flexGrow :1,"@media (min-width:900px)":{
                padding: `14px 4px`,
                minHeight:300
            }}}>
            <HeaderChart title={title}  changeTime={changeTime}/>
            {children}
        </Paper>
    );
};

export default Chart;