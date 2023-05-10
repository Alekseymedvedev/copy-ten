import React, {FC} from 'react';
import {Divider, Stack, useMediaQuery} from "@mui/material";

interface IType {
    stats?: any;
    balance?: any;
    dropdown?: any;
    gainAll?: any;
    gainCurrentMonth?: any;
    depositLoad?: any;
}

const CurrentValues: FC<IType> = ({balance,depositLoad,dropdown,gainAll,gainCurrentMonth}) => {
    const mediaQuery = useMediaQuery('(min-width:980px)');

    return (
        <Stack direction={"row"} alignItems="center" justifyContent="space-between" spacing={7}>
            <Stack alignItems="center">
                <span className="subHeaders white-90">Просадка</span>
                <span className={dropdown >0 ? "subHeadersBold green": "subHeadersBold red"}>{dropdown}%</span>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem/>
            <Stack alignItems="center">
                <span className="subHeaders white-90">Все время</span>
                <span className= {gainAll >0 ? "subHeadersBold green": "subHeadersBold red"}>{gainAll}%</span>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem/>
            <Stack alignItems="center">
                <span className="subHeaders white-90">Тек. месяц</span>
                <span className={gainCurrentMonth >0 ? "subHeadersBold green": "subHeadersBold red"}>{gainCurrentMonth}%</span>
            </Stack>
            {/*<Divider orientation="vertical" variant="middle" flexItem/>*/}
            {/*<Stack alignItems="center">*/}
            {/*    <span className="subHeaders white-90">Значение</span>*/}
            {/*    <span className={balance >0 ? "subHeadersBold green": "subHeadersBold red"}>{balance}%</span>*/}
            {/*</Stack>*/}
            <Stack
                className="subHeaders yellow"
                alignItems="center"
                justifyContent="center"
                sx={{
                    width: 34,
                    height: 34,
                    border: ` 0.5px solid #3C3C3C`,
                    borderRadius: `50%`,
                    position: !mediaQuery ?'absolute':'static',
                    right:14,
                    top:14,
                }}
            >{depositLoad}%</Stack>
        </Stack>
    );
};

export default CurrentValues;