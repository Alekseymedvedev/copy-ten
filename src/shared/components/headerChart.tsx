import React, {FC, useState} from 'react';
import {Chip, Stack} from "@mui/material";
import IconArrow from "../assets/images/icons/iconArrow";
import CustomSelect from "../UI/customSelect";

interface T {
    title?: string;
    changeTime?: any;
    select?: boolean;
    selectTitle?: string;
    defaultValue?: string;
    number?: string;
    icon?: 'bad' | 'good';
}

const HeaderChart: FC<T> = ({
                                title,
                                changeTime,
                                icon,
                            }) => {
    const [changeTimeBtn,setChangeTimeBtn]=useState(1)

    return (
        <Stack
            className="h2 white-90"
            mb={7}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={4}
            sx={{pl:12,pr:12}}
        >
            <Stack className="h2 white-90" direction="row" alignItems="center" spacing={4}>
                <span>{title}</span>
                {
                    icon === 'bad'
                        ?
                        <Stack sx={{transform: `rotate(-180deg)`}}>
                            <IconArrow color="red"/>
                        </Stack>
                        :
                        icon === 'good' ?
                            <Stack>
                                <IconArrow color="green"/>
                            </Stack>
                            : null
                }

            </Stack>
            {
                changeTime &&
                <Stack direction="row" alignItems="center" spacing={4}>
                    <Chip
                        onClick={()=> {
                            setChangeTimeBtn(1)
                            changeTime('all')
                        }}
                        label="Январь"
                        variant={changeTimeBtn ===1 ? "filled" :"outlined"}
                        color="neutral"
                        sx={{pl:0,pr:0}}/>
                    <Chip
                        onClick={()=> {
                            setChangeTimeBtn(2)
                            changeTime('current-month')
                        }}
                        label="Февраль"
                        variant={changeTimeBtn ===2 ? "filled" :"outlined"}
                        color="neutral"
                        sx={{pl:0,pr:0}}/>
                    <Chip
                        onClick={()=> {
                            setChangeTimeBtn(3)
                            changeTime('last-month')
                        }}
                        label="365 дней"
                        variant={changeTimeBtn ===3 ? "filled" :"outlined"}
                        color="neutral"
                        sx={{pl:0,pr:0}}/>
                </Stack>
            }
        </Stack>
    );
};

export default HeaderChart;