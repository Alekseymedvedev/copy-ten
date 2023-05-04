import {Button, Chip, Divider, Grid, Stack, useMediaQuery} from "@mui/material";
import React, {FC, useState} from "react";
import imgStrategyGrid from "../shared/assets/images/strategy.png";
import imgStrategyStopLoss from "../shared/assets/images/strategys-stop-loss.png";
import NickName from "../shared/components/nickName";
import Paper from "@mui/material/Paper";
import {Link, useNavigate} from "react-router-dom";
import IconSettings from "../shared/assets/images/icons/iconSettings";
import CustomAreaChart from "../entities/components/chart/customAreaChart";
import TabsHeader from "../entities/components/tabsHeader";
import IconAccount from "../shared/assets/images/icons/iconAccount";
import TabsItem from "../entities/components/tabsItem";
import {useDeleteAccountMutation} from "../store/API/userApi";
import CopyTradingModalSettings from "../entities/components/modal/copyTradingModalSettings";
import {useUnsubscribeTraderMutation} from "../store/API/tradersUserApi";
import {useAppSelector} from "../hooks/useRedux";
import SimpleModal from "../entities/components/modal/simpleModal";
import AccountModal from "../entities/components/modal/accountModal";
import DeleteAccountModal from "../entities/components/modal/deleteAccountModal";
import {useGetSubscribesSettingsQuery} from "../store/API/subscribesApi";


interface IType {
    accountId?: string;
    dataSets?: any;
    product?: any;
    login?: any;
    data?: {

        id: any;
        stats: { gain: number, dropdown: number, balance: number, deposit_load: number },
        graph: [],
        trader: { id: string | number, name: string, strategy: string }
    }[]
}

const TradersAndSets: FC<IType> = ({data, accountId, product, login, dataSets}) => {
    const navigate = useNavigate()


    const [unsubscribe] = useUnsubscribeTraderMutation()

    const mediaQuery = useMediaQuery('(min-width:900px)');

    const [value, setValue] = useState(0);

    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openModalUnsubscribe, setOpenModalUnsubscribe] = useState(false);

    const [subscribeId, setSubscribeId] = useState(0);
    const [subscribeLogin, setSubscribeLogin] = useState(0);

    const [trader, setTrader] = useState({});
    const [idTrader, setIdTrader] = useState('');
    const [nameTrader, setNameTrader] = useState('');

    const [name, setName] = useState('');


    const handleSettingsAcc = (id: any) => {
        setIdTrader(id)
        setOpenModal(true)
    }
    const handleUnsubscribe = (id: any, login: any) => {
        setSubscribeLogin(login)
        setSubscribeId(id)
        setOpenModalUnsubscribe(true)
    }

    return (
        <>
            <Paper
                sx={
                    !mediaQuery ? {
                            width: `100%`,
                            position: 'fixed',
                            top: 64,
                            right: 0,
                            left: 0,
                            background: '#1F1F1F',
                            "@media (min-width:900px)": {
                                padding: `14px `,
                            }
                        }
                        : {
                            mb: 7,
                            flexGrow: 1,
                            "@media (min-width:900px)": {
                                padding: `8px 14px`,
                            }
                        }
                }
            >
                {/*<Stack direction="row" justifyContent="space-between" spacing={7} sx={{mb: 4}}>*/}
                {/*    <Chip label="Трейдеры" variant="filled" color="neutral" sx={{flexGrow: 1}}/>*/}
                {/*    <Chip label="Сеты" variant="outlined" color="neutral" sx={{flexGrow: 1}}/>*/}
                {/*</Stack>*/}
                <TabsHeader
                    variant="fullWidth"
                    size={'sizeSmall'}
                    tabsName={[
                        {name: 'Трейдеры'},
                        {name: 'Сеты'},
                    ]}
                    tabsValue={value} onTabsChange={setValue}/>
                <Divider sx={{mb: 4, width: `105%`}}/>

                <TabsItem value={value} index={0}>
                    <Stack className="subHeadersBold white-80" sx={{mb: 4}}>{data?.length}/15</Stack>
                    <Stack spacing={7}>
                        {
                            data && data.map(item =>
                                <Paper
                                    key={item.trader.id}
                                    sx={{
                                        flexGrow: 1,
                                        "@media (min-width:900px)": {
                                            padding: `14px`,
                                        }
                                    }}>
                                    <NickName
                                        name={item.trader.name} number={item.trader.id}
                                        avatar={item.trader.strategy === 'grid' ? imgStrategyGrid : imgStrategyStopLoss}
                                        justifyContent="space-between"/>
                                    <Stack sx={{mb: 8}}>
                                        <CustomAreaChart data={item.graph} height={54}
                                                         dataArea={[{dataKey: "uv", stroke: "#6FCF97", fill: "#29312C"}]}/>
                                    </Stack>
                                    <Grid container columns={4} sx={{mb: 7}}>
                                        <Grid item xs={2}>
                                            <Stack alignItems="center" justifyContent="center" spacing={2}
                                                   sx={{
                                                       p: 2,
                                                       borderRight: `0.5px solid #3C3C3C`,
                                                       borderBottom: `0.5px solid #3C3C3C`
                                                   }}>
                                                <span className="subHeaders white-90">Прирост</span>
                                                <span className="subHeadersBold green">+{item.stats.gain}%</span>
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Stack alignItems="center" justifyContent="center" spacing={2}
                                                   sx={{p: 2, borderBottom: `0.5px solid #3C3C3C`}}>
                                                <span className="subHeaders white-90">Просадка</span>
                                                <span className="subHeadersBold green">+{item.stats.dropdown}%</span>
                                            </Stack>
                                        </Grid>
                                        {/*<Grid item xs={2}>*/}
                                        {/*    <Stack alignItems="center" justifyContent="center" spacing={2}*/}
                                        {/*           sx={{p: 2, borderRight: `0.5px solid #3C3C3C`}}>*/}
                                        {/*        <span className="subHeaders white-90">Баланс</span>*/}
                                        {/*        <span className="subHeadersBold green">+{item.stats.balance}%</span>*/}
                                        {/*    </Stack>*/}
                                        {/*</Grid>*/}
                                        <Grid item xs={4}>
                                            <Stack alignItems="center" justifyContent="center" spacing={2}
                                                   sx={{p: 2, textAlign: "center"}}>
                                                <span className="subHeaders white-90">Нагр. депозита</span>
                                                <span className="subHeadersBold green">+{item.stats.deposit_load}%</span>
                                            </Stack>
                                        </Grid>
                                    </Grid>

                                    <Stack direction="row" spacing={7} sx={{mb: 4}}>
                                        <Button
                                            onClick={() => {
                                                handleSettingsAcc(item.id)
                                                setNameTrader(item.trader.name)
                                                setTrader(item.id)
                                                setName('трейдера')
                                            }}
                                            color="neutral"
                                            sx={{width: 48, height: 48, minWidth: 'unset',backgroundColor: '#1F1F1F'}}
                                        >
                                            <IconSettings/>
                                        </Button>
                                        <Button fullWidth color="neutral" component={Link}
                                                sx={{backgroundColor: '#1F1F1F'}}
                                                to={`/trader-dashboard/${item.trader.id}`}>
                                            Дашборд
                                            трейдера
                                        </Button>
                                    </Stack>
                                    <Button onClick={() => handleUnsubscribe(item.id, item.trader.name)} fullWidth
                                            variant="contained"
                                            color="error">Отключить</Button>
                                </Paper>
                            )
                        }
                    </Stack>
                </TabsItem>
                <TabsItem value={value} index={1}>
                    <Stack className="subHeadersBold white-80" sx={{mb: 4}}>{dataSets?.length}/1</Stack>
                    <Stack spacing={7}>
                        {
                            dataSets && dataSets.map((item: any) =>
                                <Paper
                                    key={item.set.id}
                                    sx={{
                                        flexGrow: 1,
                                        "@media (min-width:900px)": {
                                            padding: `14px`,
                                        }
                                    }}>
                                    <NickName
                                        name={item.set.name} number={item.set.id}
                                        justifyContent="space-between"/>
                                    <Stack sx={{mb: 8}}>
                                        <CustomAreaChart data={item.graph} height={54}
                                                         dataArea={[{dataKey: "uv", stroke: "#6FCF97", fill: "#29312C"}]}/>
                                    </Stack>
                                    <Grid container columns={4} sx={{mb: 7}}>
                                        <Grid item xs={2}>
                                            <Stack alignItems="center" justifyContent="center" spacing={2}
                                                   sx={{
                                                       p: 2,
                                                       borderRight: `0.5px solid #3C3C3C`,
                                                       borderBottom: `0.5px solid #3C3C3C`
                                                   }}>
                                                <span className="subHeaders white-90">Прирост</span>
                                                <span className="subHeadersBold green">+{item.stats.gain}%</span>
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Stack alignItems="center" justifyContent="center" spacing={2}
                                                   sx={{p: 2, borderBottom: `0.5px solid #3C3C3C`}}>
                                                <span className="subHeaders white-90">Просадка</span>
                                                <span className="subHeadersBold green">+{item.stats.dropdown}%</span>
                                            </Stack>
                                        </Grid>
                                        {/*<Grid item xs={2}>*/}
                                        {/*    <Stack alignItems="center" justifyContent="center" spacing={2}*/}
                                        {/*           sx={{p: 2, borderRight: `0.5px solid #3C3C3C`}}>*/}
                                        {/*        <span className="subHeaders white-90">Баланс</span>*/}
                                        {/*        <span className="subHeadersBold green">+{item.stats.balance}%</span>*/}
                                        {/*    </Stack>*/}
                                        {/*</Grid>*/}
                                        <Grid item xs={4}>
                                            <Stack alignItems="center" justifyContent="center" spacing={2}
                                                   sx={{p: 2, textAlign: "center"}}>
                                                <span className="subHeaders white-90">Нагр. депозита</span>
                                                <span className="subHeadersBold green">+{item.stats.deposit_load}%</span>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                    <Button
                                        onClick={() => {
                                            handleUnsubscribe(item.id, item.set.name)
                                            setName('сет')
                                        }}
                                        fullWidth
                                            variant="contained"
                                            color="error">Отключить</Button>
                                </Paper>
                            )
                        }
                    </Stack>
                </TabsItem>
            </Paper>
            <Button onClick={() => setOpenModalDelete(true)} fullWidth variant="contained" color="error"
                    sx={{height: 76}}>Удалить
                счет</Button>

            {
                openModal &&
                <CopyTradingModalSettings
                    idTrader={idTrader}
                    openModal={openModal}
                    nameTrader={nameTrader}
                    trader={trader}
                    nameAccount={login}
                    closeModal={setOpenModal}>

                    <span>Изменить настройки</span>
                    <span className="green">&nbsp;{nameTrader}&nbsp;</span>
                    <span>на счет</span>
                    <span className="blue">&nbsp;для счета {login}&nbsp;</span>
                    <span>?</span>

                </CopyTradingModalSettings>
            }
            {
                openModalUnsubscribe &&
                <SimpleModal title="Отключить тредера" openModal={openModalUnsubscribe}
                             closeModal={setOpenModalUnsubscribe}>
                <div className="h2">
                    <span>Отключить {name}</span>
                    <span className="yellow">&nbsp;{subscribeLogin}&nbsp;</span>
                    <span>от счета</span>
                    <span className="blue"> {login}</span>
                </div>
                    <Stack direction="row" justifyContent="flex-end" spacing={7}>
                        <Button onClick={() => setOpenModalUnsubscribe(false)} color="error">Отмена</Button>
                        <Button
                            onClick={() => {
                                unsubscribe(subscribeId).then(() => setOpenModalUnsubscribe(false))
                                // navigate(0)
                            }}
                            color="success">Сохранить</Button>
                    </Stack>
                </SimpleModal>
            }
            {
                openModalDelete &&
                <DeleteAccountModal
                    accountId={accountId}
                    product={product}
                    accountName={login}
                    openModal={openModalDelete}
                    closeModal={setOpenModalDelete}
                />
            }

        </>
    );
};
export default TradersAndSets;