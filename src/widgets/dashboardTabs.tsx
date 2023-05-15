import React, {FC, useEffect, useState} from 'react';
import TabsItem from "../entities/components/tabsItem";
import Box from "@mui/material/Box";
import {Grid, Skeleton, Stack, useMediaQuery} from "@mui/material";
import DashboardLabel from "../entities/components/dashboardLabel";
import TransactionsLabel from "../entities/components/transactionsLabel";
import BalanceChart from "./balanceChart";
import CustomBarChart from "../entities/components/chart/customBarChart";
import Chart from "../entities/components/chart/chart";
import CustomTable from "../shared/components/customTable";
import TradersAndSets from "./tradersAndSets";
import TabsHeader from "../entities/components/tabsHeader";
import IconAccount from "../shared/assets/images/icons/iconAccount";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DashboardTradersSidebar from "./dashboardTradersSidebar";
import {useAppDispatch, useAppSelector} from "../hooks/useRedux";
import {barChartSlice} from "../store/slice/barChartSlice";
import {useLocation} from "react-router-dom";
import {useGetAllSubscribesQuery, useGetAllSubscribesSetQuery} from "../store/API/subscribesApi";
import {useGetHistoryQuery} from "../store/API/tradersUserApi";
import TransactionChart from "../entities/components/chart/transactionChart";
import SymbolChart from "../entities/components/chart/symbolChart";
import DashboardTable from "../shared/components/dashboardTable";
import ByTradersChart from "../entities/components/chart/byTradersChart";
import IconTabs from "../shared/assets/images/icons/iconTabs";


interface IType {
    product?: any;
    login?: any;

    traderDashboard?: boolean;
    dataTrader?: any;
    dataDashboard?: any;
    balanceChartData?: any;
    dataTradersChart?: any;
    dataSymbol?: any;
    dataChartDay?: any;
    dataChartHours?: any;
    dataChartMonths?: any;
    dataChartDrawdown?: any;
    dataBalanceGain?: any;
    dataChartDrawdownAndGain?: any;
    isLoadingSymbol?: any;
    dataHistory?: any;
    changePage?:any;
    page?:any;

    balanceChartUrl?: any;
    balanceGainChartUrl?: any;
    dayChartUrl?: any;
    hoursChartUrl?: any;
    tradersChartUrl?: any;
    drawdownChartUrl?: any;
    drawdownAndGainChartUrl?: any;
    isTrader?:any
}


const DashboardTabs: FC<IType> = ({
                                      product,
                                      login,
                                      traderDashboard,
                                      dataTrader,
                                      dataDashboard,
                                      balanceChartData,
                                      dataTradersChart,
                                      dataSymbol,
                                      dataChartDay,
                                      dataChartHours,
                                      dataChartMonths,
                                      dataChartDrawdown,
                                      dataBalanceGain,
                                      dataChartDrawdownAndGain,
                                      isLoadingSymbol,
                                      balanceChartUrl,
                                      balanceGainChartUrl,
                                      dayChartUrl,
                                      hoursChartUrl,
                                      tradersChartUrl,
                                      drawdownChartUrl,
                                      drawdownAndGainChartUrl,
                                      dataHistory,
                                      isTrader,changePage,page
                                  }) => {

    const {barChartData} = useAppSelector(state => state.barChartReducer)
    const dispatch = useAppDispatch()
    const {fetchBarChart} = barChartSlice.actions

    const mediaQuery = useMediaQuery('(min-width:980px)');
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [value, setValue] = useState(0);




    useEffect((() => {

        if (dataSymbol) dispatch(fetchBarChart(dataSymbol))
        // setDataChart(barChartData)
        if (!mediaQuery) {
            setSidebarVisible(false)
        }
    }), [mediaQuery, dataSymbol])
    return (
        <>
            <Box sx={{width: '100%'}}>
                <TabsHeader
                    tabsName={[
                        {name: 'Дашборд', icon: <IconTabs/>},
                        {name: 'История', icon: <IconTabs/>},
                        // {name: 'Открытые позиции', icon: <IconAccount/>}
                    ]}
                    tabsValue={value} onTabsChange={setValue}/>

                <TabsItem value={value} index={0}>
                    <Grid container spacing={10} columns={12} wrap="wrap">
                        <Grid item md={8} xs={16}>
                            <Stack spacing={7}>
                                {
                                    traderDashboard &&
                                    <Paper>
                                        <Stack className="subHeaders white-80" spacing={7}>
                                            <p>
                                                {dataTrader?.description}
                                            </p>
                                        </Stack>
                                    </Paper>

                                }
                                <DashboardLabel
                                    accountType={dataDashboard && dataDashboard?.server.type}
                                                notifications={dataDashboard?.notifications}
                                                balance={dataTrader ? dataTrader?.stats?.balance : dataDashboard?.stats?.balance}/>
                                <TransactionsLabel
                                    isTrader={dataTrader && true }
                                    data={dataTrader ? dataTrader?.stats : dataDashboard?.stats}/>
                                {
                                    balanceChartData &&
                                    <Chart title="Баланс" changeTime={balanceChartUrl}>
                                        <TransactionChart balanceChartData={balanceChartData}/>
                                    </Chart>
                                }

                                {
                                    dataChartDrawdown &&
                                    <Chart title="Просадка" changeTime={drawdownChartUrl}>
                                        <BalanceChart data={dataChartDrawdown}/>
                                    </Chart>
                                }
                                 {
                                     dataTradersChart &&
                                    <Chart title="По тредерам" changeTime={tradersChartUrl}>
                                        <ByTradersChart data={dataTradersChart}/>
                                    </Chart>
                                }
                                {
                                    dataBalanceGain &&
                                    <Chart title="Прирост" changeTime={balanceGainChartUrl}>
                                        <BalanceChart data={dataBalanceGain}/>
                                    </Chart>
                                }
                                {
                                    dataChartDrawdownAndGain &&
                                    <Chart title="Прирост-просадка ($)" changeTime={drawdownAndGainChartUrl}>
                                        <BalanceChart drawdownAndGain data={dataChartDrawdownAndGain}/>
                                    </Chart>
                                }

                                {
                                    dataSymbol?.length > 0 && <SymbolChart data={barChartData}/>
                                }
                                {
                                    dataChartDay?.length > 0 &&
                                    <Chart title="По дням">
                                        <CustomBarChart barChartData={dataChartDay}/>
                                    </Chart>
                                }
                                {
                                    dataChartHours?.length > 0 &&
                                    <Chart title="По часам">
                                        <CustomBarChart barChartData={dataChartHours}/>
                                    </Chart>
                                }
                                {
                                    dataChartMonths?.length > 0 &&
                                    <Paper>
                                        <Stack className="h2 white-90" sx={{mb: 7}}>По месяцам</Stack>
                                        <DashboardTable
                                            data={dataChartMonths}
                                            dataTableHead={['Год', 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек', 'Всего']}
                                        />
                                    </Paper>
                                }

                            </Stack>
                        </Grid>
                        {
                            sidebarVisible &&
                            <Grid item md={4} xs={16}>
                                {
                                    (traderDashboard && dataTrader) ?
                                        <DashboardTradersSidebar dataTrader={dataTrader}/>
                                        :
                                            <TradersAndSets
                                                assigned={dataDashboard?.product?.assigned}
                                                product={dataDashboard?.product?.product_data?.title}
                                                login={dataDashboard?.login}
                                            />
                                }


                            </Grid>
                        }
                    </Grid>
                    {
                        !mediaQuery &&
                        <Button
                            onClick={() => setSidebarVisible(true)}
                            variant="contained"
                            color="warning"
                            sx={{height: 48, position: 'fixed', right: 20, left: 20, bottom: 40}}
                        >Настройки</Button>

                    }
                </TabsItem>
                <TabsItem value={value} index={1}>
                    <CustomTable
                        changePage={changePage} page={page}
                        isTrader={isTrader}
                        data={dataHistory}
                        dataTableHead={dataTrader ?
                            [
                                'Время',  'Тип', 'Обьем', 'Символ', 'Цена', 'Время', 'Цена', 'Комиссия', 'Своп', 'Прибыль'
                            ]
                            :
                            [
                                'Время', 'Трейдер', 'Тип', 'Обьем', 'Символ', 'Цена', 'Время', 'Цена', 'Комиссия', 'Своп', 'Прибыль'
                            ]
                    }
                    />
                </TabsItem>
                {/*<TabsItem value={value} index={2}>*/}
                {/*    <CustomTable/>*/}
                {/*</TabsItem>*/}
            </Box>
        </>
    );
};

export default DashboardTabs;