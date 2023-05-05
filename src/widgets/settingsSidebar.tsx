import React, {FC, useState} from 'react';

import Paper from "@mui/material/Paper";
import {Button, Divider, Skeleton, Stack} from "@mui/material";
import CustomRange from "../shared/components/customRange";
import Parameters from "../entities/components/parameters";
import {setParametersSlice} from "../store/slice/parametersSlice";
import {useAppDispatch} from "../hooks/useRedux";
import {useGetSubscribesSettingsQuery} from "../store/API/subscribesApi";
import CopyTradingModalChild from "../entities/components/modal/copyTradingModalChild";

interface IType {
    accountName?: any
    subscribeId?: any
}

const SettingsSidebar: FC<IType> = ({accountName,subscribeId}) => {
    const {
        addRisk,
        addMaxLot,
        addMinLot,
    } = setParametersSlice.actions
    const dispatch = useAppDispatch()


    const {data,isLoading} = useGetSubscribesSettingsQuery(subscribeId)

    const [connectionHunterMod, setConnectionHunterMod] = useState(false)
    const [hunterModBtn, setHunterModBtn] = useState('Hunter Mod')
    const [openModalSave, setOpenModalSave] = useState(false);

    if(isLoading){
        return(
            <Skeleton variant="rounded" width={`100%`} height={433} sx={{p: 14}}/>
        )
    }

    const handleRisk = (value: any) => {
        dispatch(addRisk(value))
    }
    const handleMaxLot = (value: any) => {
        dispatch(addMaxLot(value))
    }
    const handleMinLot = (value: any) => {
        dispatch(addMinLot(value))
    }

    const handlerHunterMod = () => {
        setConnectionHunterMod(true)
    }

    const handlerCloseHunterMod = () => {
        setConnectionHunterMod(false)
        setHunterModBtn('Hunter Mod')
    }


    return (
        <Paper sx={{p: 14,}} >

            <Stack spacing={7}>
                <span className="h2 white-90">Настройки</span>
                <Divider variant="fullWidth" sx={{width: `112%`}}/>
                {
                    connectionHunterMod ?
                        <Stack spacing={7}>
                            <Paper sx={{p: `14px 8px`}}>
                                <Stack spacing={4}>
                                    <span className="h2 blue">Включен Hunter Mod!</span>
                                    <span className="subHeaders white-90">Чтобы перейти к обычным настройкам, необходимо отключить Hunter Mod</span>
                                </Stack>
                            </Paper>
                            <Paper sx={{p: `14px 8px`}}>
                                <Stack spacing={7}>
                                    <Stack className="h2 blue" alignItems="center">Hunter Mod</Stack>
                                    <Stack className="subHeaders white-90" direction="row"
                                           alignItems="center"
                                           justifyContent="space-between">
                                        <span>Риск</span>
                                        <span className="white-90">34%</span>
                                    </Stack>
                                    <Stack className="subHeaders white-90" direction="row"
                                           alignItems="center"
                                           justifyContent="space-between">
                                        <span>Мин.лот</span>
                                        <span className="white-90">Да</span>
                                    </Stack>
                                    <Stack className="subHeaders white-90" direction="row"
                                           alignItems="center"
                                           justifyContent="space-between">
                                        <span>Просадка</span>
                                        <span className="white-90">6%</span>
                                    </Stack>
                                    <Button fullWidth variant="contained" color="success">Настройки</Button>
                                    <Button fullWidth variant="contained" color="error"
                                            onClick={handlerCloseHunterMod}>Отключить</Button>
                                </Stack>
                            </Paper>
                        </Stack>
                        :


                        <>

                            <CustomRange onChange={handleRisk} title="Риск" defaultValue={data?.risk}
                                         required
                                         isSwitch
                                         isSliderRange/>
                            <CustomRange onChange={handleMaxLot} title="Макс. лот"
                                         defaultValue={data?.max_lot}
                                         required isSwitch
                                         isSliderRange/>
                            <CustomRange onChangeSwift={handleMinLot} title="Мин. лот"
                                         isSwitchChecked={false}
                                         required
                                         isSwitch/>
                            <Parameters
                                symbolSettings={data?.exclude_symbols}
                                hoursSettings={data?.exclude_hours}
                                daySettings={data?.exclude_days}
                            />
                        </>
                }
                <Button onClick={() => setOpenModalSave(true)} fullWidth variant="contained"
                        color="success">Сохранить</Button>

            </Stack>

            {
                openModalSave &&
                <CopyTradingModalChild idTrader={subscribeId} nameAccount={accountName} openModal={openModalSave}
                                       closeModal={setOpenModalSave}/>
            }
        </Paper>
    );
};

export default SettingsSidebar;