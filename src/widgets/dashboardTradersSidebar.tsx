import React, {FC, useState} from 'react';
import Paper from "@mui/material/Paper";
import {Button, Divider, Skeleton, Stack} from "@mui/material";
import IconConnected from "../shared/assets/images/icons/iconConnected";
import CustomRange from "../shared/components/customRange";
import Parameters from "../entities/components/parameters";
import HunterModModal from "../entities/components/modal/hunterModModal";
import {useAppDispatch, useAppSelector} from "../hooks/useRedux";
import {useGetSubscribesSettingsQuery} from "../store/API/subscribesApi";
import CopyTradingModalSettings from "../entities/components/modal/copyTradingModalSettings";
import CopyTradingModalChild from "../entities/components/modal/copyTradingModalChild";
import SimpleModal from "../entities/components/modal/simpleModal";
import {useUnsubscribeTraderMutation} from "../store/API/tradersUserApi";
import {setParametersSlice} from "../store/slice/parametersSlice";
import SettingsSidebar from "./settingsSidebar";

interface IType {
    dataTrader?: any
}

const DashboardTradersSidebar: FC<IType> = ({dataTrader}) => {

    const {accountId, accountName} = useAppSelector(state => state.accountIdReducer)

    const subscribe = dataTrader?.subscribed_forex_accounts.find((item: any) => item.forex_account.id === accountId)

    const [unsubscribe] = useUnsubscribeTraderMutation()

    const [openModal, setOpenModal] = useState(false);
    const [openModalUnsubscribe, setOpenModalUnsubscribe] = useState(false);

    const [hoverBtn, setHoverBtn] = useState(false);

    return (
        <Stack spacing={7} sx={{height:`100%`}}>
            <Paper sx={{"@media (min-width:980px)": {
                    p: 14,
                }}}>
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
                        <span className="green">
                            {dataTrader?.stats?.mean_profit_in_pip}
                        </span>
                    </Stack>
                    <Stack className="subHeaders white-90" direction="row" alignItems="center"
                           justifyContent="space-between">
                        <span>Средний убыток в PIP</span>
                        <span className="red">
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
                (dataTrader?.subscribed_forex_accounts.find((item: any) => item.forex_account.id === accountId) ) &&
                <Stack sx={{position: 'sticky', top: 0}}>
                    <SettingsSidebar traderId={dataTrader.id} accountName={accountName} subscribeId={subscribe.id}/>
                </Stack>

            }
            {/*<Button fullWidth variant="gardient" color="info" onClick={handlerHunterMod}>*/}
            {/*    <span className="h2 blue">{hunterModBtn}</span>*/}
            {/*</Button>*/}
            {/*<HunterModModal setConnectionHunterMod={setConnectionHunterMod} setHunterModBtn={setHunterModBtn} openModal={openModal} closeModal={setOpenModal}/>*/}
            {
                openModal &&
                <CopyTradingModalSettings
                    skip={!dataTrader?.subscribed_forex_accounts.find((item: any) => item.forex_account.id === accountId)}
                    idTraderSubscribe={dataTrader.id}
                    idTrader={dataTrader.id}
                    nameTrader={dataTrader?.name}
                    nameAccount={accountName}
                    idAccount={accountId}
                    openModal={openModal}
                    closeModal={setOpenModal}/>
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