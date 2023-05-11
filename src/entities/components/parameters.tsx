import React, {FC, useEffect, useState} from 'react';
import {IconButton, Stack} from "@mui/material";
import IconClose from "../../shared/assets/images/icons/iconClose";
import CustomSelect from "../../shared/UI/customSelect";
import Button from "@mui/material/Button";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {barChartSlice} from "../../store/slice/barChartSlice";
import setParametersReducer, {setParametersSlice} from "../../store/slice/parametersSlice";
import {useGetAccountSymbolQuery} from "../../store/API/userApi";
import {useGetTraderSymbolQuery} from "../../store/API/tradersUserApi";

interface IType {
    symbolSettings?: any
    daySettings?: any
    hoursSettings?: any
    traderId?: any
    traderSymbol?: any
    skip?: any
}

const Parameters: FC<IType> = ({traderSymbol, traderId,symbolSettings, daySettings, hoursSettings}) => {
   const [skip, setSkip] = useState(false)
    const {accountId, accountName} = useAppSelector(state => state.accountIdReducer)
    const {data} = useGetAccountSymbolQuery(accountId,{skip: traderSymbol})
    const {data: dataTraderSymbol} = useGetTraderSymbolQuery(traderId, {skip: !traderSymbol})

    // useEffect(()=>{
    // },[traderSymbol])
    const {addExcludeDays, addExcludeHours, addExcludeSymbols} = setParametersSlice.actions
    const dispatch = useAppDispatch()

    const handleExcludeSymbols = (value: any) => {
        dispatch(addExcludeSymbols(value))
    }
    const handleExcludeHours = (value: any) => {
        dispatch(addExcludeHours(value))
    }
    const handleExcludeDays = (value: any) => {
        dispatch(addExcludeDays(value))
    }
    return (
        <Stack spacing={7}
               sx={{p: `12px 8px`, border: `0.5px solid #3C3C3C`, borderRadius: 2.5}}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" alignItems="center" spacing={4}>
                    <IconButton
                        className="red"
                        size="small"
                        sx={{p: 4, border: `0.5px solid #3C3C3C`, borderRadius: 1}}
                    >
                        <IconClose deleteBtn/>
                    </IconButton>
                    <span className="subHeaders white-90">Символы</span>
                </Stack>
                <CustomSelect
                    isSettingsParams={symbolSettings ? symbolSettings : null}
                    optionValue={handleExcludeSymbols}
                    options={
                        data ?
                            data?.data?.map((item: any) => ({id: item.title, title: item.title}))
                            : dataTraderSymbol?.data?.map((item: any) => ({id: item.title, title: item.title}))
                    }
                    multiple/>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" alignItems="center" spacing={4}>
                    <IconButton
                        className="red"
                        size="small"
                        sx={{p: 4, border: `0.5px solid #3C3C3C`, borderRadius: 1}}
                    >
                        <IconClose deleteBtn/>
                    </IconButton>
                    <span className="subHeaders white-90">Дни</span>
                </Stack>
                <CustomSelect
                    isSettingsParams={daySettings ? daySettings : null}
                    optionValue={handleExcludeDays}
                    options={[
                        {id: 'Пн', title: 'Пн'},
                        {id: 'Вт', title: 'Вт'},
                        {id: 'Ср', title: 'Ср'},
                        {id: 'Чт', title: 'Чт'},
                        {id: 'Пт', title: 'Пт'},
                        {id: 'Сб', title: 'Сб'},
                        {id: 'Вс', title: 'Вс'},
                    ]}
                    multiple/>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" alignItems="center" spacing={4}>
                    <IconButton
                        className="red"
                        size="small"
                        sx={{p: 4, border: `0.5px solid #3C3C3C`, borderRadius: 1}}
                    >
                        <IconClose deleteBtn/>
                    </IconButton>
                    <span className="subHeaders white-90">Часы</span>
                </Stack>
                <CustomSelect
                    isSettingsParams={hoursSettings ? hoursSettings : null}
                    optionValue={handleExcludeHours}
                    options={
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((item: any) => ({
                            id: item,
                            title: item
                        }))
                    }
                    multiple/>
            </Stack>
            {/*<Button color="success">Оптимизировать</Button>*/}
            {/*<Button color="error">Сброс</Button>*/}
        </Stack>
    );
};

export default Parameters;