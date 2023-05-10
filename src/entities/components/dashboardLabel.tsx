import React, {FC} from 'react';
import {Chip, Stack} from "@mui/material";
import {NavLink} from "react-router-dom";
import IconArrow from "../../shared/assets/images/icons/iconArrow";

interface T {
    accountType?: any;
    notifications?: any;
    balance?: any;
}

const DashboardLabel: FC<T> = ({accountType, notifications, balance}) => {

    return (
        <Stack spacing={7}>
            {
                notifications?.product_not_assign &&
                <Stack className="redBg" sx={{p: `14px 28px`, border: `0.5px solid #3C3C3C`, borderRadius: 2.5}}>
                    <span className="h2 white-90">Внимание</span>
                    <span className="red">У вас не приобретен продукт для работы платформы</span>
                </Stack>
            }
            {
                notifications?.balance_limit_reached &&
                <Stack className="blueBg" sx={{p: `14px 28px`, border: `0.5px solid #3C3C3C`, borderRadius: 2.5}}>
                    <span className="h2 white-90">Внимание</span>
                    <span className="white-100">
                        Ваш баланс превышает лимит продукта.
                        <NavLink className="link" to="/tariff">&nbsp;Обновить тариф</NavLink>
                    </span>
                </Stack>
            }
            {
                balance &&
                <Stack
                    direction="row" justifyContent="space-between" alignItems="center"
                    className="redBg" sx={{
                    p: `14px 28px`,
                    border: `0.5px solid #3C3C3C`,
                    borderRadius: 2.5,
                    background: `linear-gradient(90deg, #1F1F1F 0%, rgba(31, 31, 31, 0) 100%)`
                }}>
                    <Stack >
                        <span className="h2 white-90">Баланс</span>
                        <Stack direction="row" spacing={4} alignItems="flex-end">
                            <span className="h1 white-100">${balance.value}</span>
                            <span className={`subHeaders + ${balance.gain>0 ?'green': 'red'}`}>
                                {balance.gain}&nbsp;
                                <IconArrow  />
                            </span>
                        </Stack>

                    </Stack>
                    {
                        accountType === 0 ?
                            <Chip label="Центовый" variant="filled" color="neutral" sx={{pr: 0, pl: 0}}/>
                            : accountType === 1 ?
                            <Chip label="Долларовый" variant="filled" color="warning" sx={{pr: 0, pl: 0}}/>
                            :null
                    }
                </Stack>
            }
        </Stack>
    );
};

export default DashboardLabel;