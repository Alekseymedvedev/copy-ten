import React, {FC, useEffect, useState} from 'react';
import {Typography, Stack, useMediaQuery, Chip, FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import CustomSelect from "../shared/UI/customSelect";
import {useGetProfileQuery} from "../store/API/profileApi";
import {Link} from "react-router-dom";
import {authSlice} from "../store/slice/authSlice";
import {useAppDispatch, useAppSelector} from "../hooks/useRedux";
import {accountIdSlice} from "../store/slice/accountIdSlice";


interface T {
    heading?: string;
    accountNumber?: string;
    isSelect?: boolean;
    typeAccount?: string
}


const Header: FC<T> = ({heading,  isSelect,accountNumber, typeAccount}) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    const {data, error, isLoading} = useGetProfileQuery('')

    const { changeAccountId,changeAccountName } = accountIdSlice.actions
    const dispatch = useAppDispatch()

    useEffect(()=>{
       dispatch(changeAccountId(data?.data?.accounts[0]?.id))
       dispatch(changeAccountName(data?.data?.accounts[0]?.login))
     },[data,isLoading])

    const changeAccount=(e:any)=>{
        const account =data?.data?.accounts.filter((item:any)=>item.id ===e.target.value)
        dispatch(changeAccountId(e.target.value))
        dispatch(changeAccountName(account[0].login))
    }
    return (
        <header className="header">
            <Stack direction={mediaQuery ? "row" : "column"} spacing="auto" alignItems="center">
                <Stack
                    direction={mediaQuery ? "row" : "column"}
                    spacing={mediaQuery ? 7 : 4}
                    alignItems="center"
                    sx={mediaQuery ? null : {mb: 4}}>
                    <Typography variant="h1">
                        <span>{heading}</span>
                        {
                            accountNumber &&
                            <span>
                            <span className="white-90"> / Счет </span>
                            <span>{accountNumber}</span>
                        </span>
                        }
                    </Typography>
                    {typeAccount && <Chip label={typeAccount} variant="filled" color="success"/>}
                    {/*{typeAccount === 0 && <Chip label="Центовый" variant="filled" color="neutral"/>}*/}
                    {/*{typeAccount === 'copytrad' && <Chip label="Копитрейдинг" variant="filled" color="success"/>}*/}
                    {/*{typeAccount === 'robot' && <Chip label="Робот" color="secondary"/>}*/}
                </Stack>
                <Stack className="subHeaders" direction={mediaQuery ? "row" : "column"} alignItems="center" spacing={mediaQuery ? 7 : 4}>
                    {(isSelect && !isLoading) &&
                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={7}>
                            <span className="white-80">Выбор&nbsp;счета</span>
                            <Select
                                onChange={changeAccount}
                                IconComponent={"select"}
                                fullWidth
                                defaultValue={data?.data?.accounts[0]?.id}
                            >
                                {
                                    data &&
                                    data?.data?.accounts?.map((item: any) =>
                                        <MenuItem
                                            key={item.id}
                                            value={item.id}
                                        >
                                            Счет&nbsp;{item.login}&nbsp;
                                            (
                                            <span
                                                className={
                                                    item.deposit_load < 33 ?
                                                        'green'
                                                        : item.deposit_load < 66 ?
                                                            'yellow'
                                                            : 'red'
                                                }
                                            >
                                               {item.deposit_load}%
                                            </span>
                                            )
                                        </MenuItem>
                                    )
                                }
                            </Select>
                        </Stack>
                    }
                </Stack>
            </Stack>
        </header>
    );
};

export default Header;