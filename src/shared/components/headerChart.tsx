import React, {FC, useEffect, useState} from 'react';
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
    const [changeTimeBtn, setChangeTimeBtn] = useState(1)
    const [monthArr, setMonthArr] = useState(['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'])
    const [currentMonth, setCurrentMonth] = useState('')
    const [lastMonth, setLastMonth] = useState('')

    useEffect(() => {
        const newDate = new Date();
        const month = newDate.toLocaleString('default', { month: 'long' });
        setCurrentMonth(month);
        setLastMonth(monthArr[newDate.getMonth()-1]);
    }, [])
    return (
        <Stack
            className="h2 white-90"
            mb={7}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={4}
            sx={{pl: 12, pr: 12}}
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
                        onClick={() => {
                            setChangeTimeBtn(1)
                            changeTime('all')
                        }}
                        label="Все время"
                        variant={changeTimeBtn === 1 ? "filled" : "outlined"}
                        color="neutral"
                        sx={{pl: 0, pr: 0}}/>
                    <Chip
                        onClick={() => {
                            setChangeTimeBtn(2)
                            changeTime('current-month')
                        }}
                        label={currentMonth}
                        variant={changeTimeBtn === 2 ? "filled" : "outlined"}
                        color="neutral"
                        sx={{pl: 0, pr: 0}}/>
                    <Chip
                        onClick={() => {
                            setChangeTimeBtn(3)
                            changeTime('last-month')
                        }}
                        label={lastMonth}
                        variant={changeTimeBtn === 3 ? "filled" : "outlined"}
                        color="neutral"
                        sx={{pl: 0, pr: 0}}/>
                </Stack>
            }
        </Stack>
    );
};

export default HeaderChart;