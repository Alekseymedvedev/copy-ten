import React, {FC, useState} from 'react';
import Paper from "@mui/material/Paper";
import {Button, Divider, Stack} from "@mui/material";
import IconConnected from "../shared/assets/images/icons/iconConnected";
import CustomRange from "../shared/components/customRange";
import Parameters from "../entities/components/parameters";
import HunterModModal from "../entities/components/modal/hunterModModal";
import {useAppSelector} from "../hooks/useRedux";
import {useGetSubscribesSettingsQuery} from "../store/API/subscribesApi";
import CopyTradingModalSettings from "../entities/components/modal/copyTradingModalSettings";
import CopyTradingModalChild from "../entities/components/modal/copyTradingModalChild";
import SimpleModal from "../entities/components/modal/simpleModal";
import {useUnsubscribeTraderMutation} from "../store/API/tradersUserApi";

interface IType {
    dataTrader?: any
}

const DashboardTradersSidebar: FC<IType> = ({dataTrader}) => {
    const {accountId, accountName} = useAppSelector(state => state.accountIdReducer)

    const subscribe = dataTrader?.subscribed_forex_accounts.find((item: any) => item.forex_account.id === accountId)
    const {data} = useGetSubscribesSettingsQuery(subscribe?.id)
    const [unsubscribe] = useUnsubscribeTraderMutation()

    const [connectionHunterMod, setConnectionHunterMod] = useState(false)
    const [hunterModBtn, setHunterModBtn] = useState('Hunter Mod')

    const [openModal, setOpenModal] = useState(false);
    const [openModalUnsubscribe, setOpenModalUnsubscribe] = useState(false);
    const [openModalSave, setOpenModalSave] = useState(false);

    const [hoverBtn, setHoverBtn] = useState(false);

    const handlerHunterMod = () => {
        setConnectionHunterMod(true)
        setOpenModal(true)

    }

    const handlerCloseHunterMod = () => {
        setConnectionHunterMod(false)
        setHunterModBtn('Hunter Mod')
    }

    return (
        <Stack spacing={7}>
            <Paper sx={{p: 14}}>
                <Stack spacing={7}>
                    <Stack>
                        Информация
                    </Stack>
                    <Divider variant="fullWidth" sx={{width: `112%`}}/>
                    <Stack className="subHeaders white-90" direction="row" alignItems="center"
                           justifyContent="space-between">
                        <span>Стратегия</span>
                        <span className="subHeaders white-100">{dataTrader?.strategy}</span>
                    </Stack>
                    <Stack className="subHeaders white-90" direction="row" alignItems="center"
                           justifyContent="space-between">
                        <span>Начало торгов</span>
                        <span className="subHeaders white-100">{dataTrader?.start_trading_at}</span>
                    </Stack>
                    <Stack className="subHeaders white-90" direction="row" alignItems="center"
                           justifyContent="space-between">
                        <span>Сделок за неделю</span>
                        <span className="subHeaders white-100">{dataTrader?.stats?.deals_count?.all_per_week}</span>
                    </Stack>
                    <Stack className="subHeaders white-90" direction="row" alignItems="center"
                           justifyContent="space-between">
                        <span>Средняя прибыль в PIP</span>
                        <span className={dataTrader?.stats?.mean_profit_in_pip > 0 ? "green" : "red"}>
                            {dataTrader?.stats?.mean_profit_in_pip}
                        </span>
                    </Stack>
                    <Stack className="subHeaders white-90" direction="row" alignItems="center"
                           justifyContent="space-between">
                        <span>Средний убыток в PIP</span>
                        <span className={dataTrader?.stats?.mean_losing_in_pip > 0 ? "green" : "red"}>
                            {dataTrader?.stats?.mean_losing_in_pip}
                        </span>
                    </Stack>
                    <Stack className="subHeaders white-90" direction="row" alignItems="center"
                           justifyContent="space-between">
                        <span>Минимальная нагрузка</span>
                        <span className="subHeaders yellow">{dataTrader?.stats?.deposit_load?.min}%</span>
                    </Stack>
                </Stack>
            </Paper>

            {
                dataTrader?.subscribed_forex_accounts.find((item: any) => item.forex_account.id === accountId) ?
                    <Button
                        onMouseEnter={() => setHoverBtn(true)}
                        onMouseLeave={() => setHoverBtn(false)}
                        onClick={() => setOpenModalUnsubscribe(true)}
                        fullWidth
                        variant="contained"
                        color={!hoverBtn ? "success" : "error"}
                        startIcon={!hoverBtn && <IconConnected connected/>}
                        sx={{height: 96}}>
                        <span className="h2">{!hoverBtn ? "Подключено" : "Отключить"}</span>
                    </Button>
                    :
                    <Button
                        onClick={() => setOpenModal(true)}
                        fullWidth
                        variant="contained"
                        color="warning"
                        startIcon={<IconConnected/>}
                        sx={{height: 96}}
                    >
                        <span className="h2">Подключиться</span>
                    </Button>
            }

            {
                dataTrader?.subscribed_forex_accounts.find((item: any) => item.forex_account.id === accountId) &&
                <Paper sx={{p: 14}}>

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
                                            <Stack className="subHeaders white-90" direction="row" alignItems="center"
                                                   justifyContent="space-between">
                                                <span>Риск</span>
                                                <span className="white-90">34%</span>
                                            </Stack>
                                            <Stack className="subHeaders white-90" direction="row" alignItems="center"
                                                   justifyContent="space-between">
                                                <span>Мин.лот</span>
                                                <span className="white-90">Да</span>
                                            </Stack>
                                            <Stack className="subHeaders white-90" direction="row" alignItems="center"
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
                                    <CustomRange title="Риск" defaultValue={data?.risk} required isSwitch
                                                 isSliderRange/>
                                    <CustomRange title="Макс. лот" defaultValue={data?.max_lot} required isSwitch
                                                 isSliderRange/>
                                    <CustomRange title="Мин. лот" isSwitchChecked={data?.min_lot} required
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
                </Paper>
            }
            {/*<Button fullWidth variant="gardient" color="info" onClick={handlerHunterMod}>*/}
            {/*    <span className="h2 blue">{hunterModBtn}</span>*/}
            {/*</Button>*/}
            {/*<HunterModModal setConnectionHunterMod={setConnectionHunterMod} setHunterModBtn={setHunterModBtn} openModal={openModal} closeModal={setOpenModal}/>*/}
            {
                openModal &&
                <CopyTradingModalSettings idTrader={dataTrader.id} nameAccount={accountName} idAccount={accountId}
                                          openModal={openModal}
                                          closeModal={setOpenModal}/>
            }
            {
                openModalSave &&
                <CopyTradingModalChild idTrader={subscribe?.id} openModal={openModalSave}
                                       closeModal={setOpenModalSave}/>
            }
            {
                openModalUnsubscribe &&
                <SimpleModal title="Отключить тредера" openModal={openModalUnsubscribe}
                             closeModal={setOpenModalUnsubscribe}>
                    <span className="h2">
                        <span>Отключить тредера</span>
                        <span>&nbsp;от счета</span>
                        <span className="yellow">&nbsp;{accountName}&nbsp;</span>
                    </span>
                    <Stack direction="row" justifyContent="flex-end" spacing={7}>
                        <Button onClick={() => setOpenModalUnsubscribe(false)} color="error">Отмена</Button>
                        <Button
                            onClick={() => {
                                unsubscribe(subscribe?.id).then(() => setOpenModalUnsubscribe(false))
                            }}
                            color="success">Подтвердить</Button>
                    </Stack>
                </SimpleModal>
            }
        </Stack>

    );
};

export default DashboardTradersSidebar;