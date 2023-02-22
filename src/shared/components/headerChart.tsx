import React, {FC} from 'react';
import {Chip, Stack} from "@mui/material";
import IconArrow from "../assets/images/icons/iconArrow";
import CustomSelect from "../UI/customSelect";

interface T {
    title?: string;
    date?: boolean;
    select?: boolean;
    selectTitle?: string;
    number?: string;
    icon?: string;
}

const HeaderChart: FC<T> = ({
                                title,
                                date,
                                select,
                                selectTitle,
                                number,
                                icon,
                            }) => {
    return (
        <Stack
            className="h2 white-90"
            mb={7}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={4}
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
                date &&
                <Stack direction="row" alignItems="center" spacing={4}>
                    <Chip label="Январь" variant="filled" color="neutral"/>
                    <Chip label="Февраль" variant="outlined" color="neutral"/>
                    <Chip label="365 дней" variant="outlined" color="neutral"/>
                </Stack>
            }
            {
                select &&
                <CustomSelect title={selectTitle}/>
            }
            {number && <span className="green">{number}</span>}
        </Stack>
    );
};

export default HeaderChart;