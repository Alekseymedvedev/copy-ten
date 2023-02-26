import React, {FC, useState} from 'react';
import TabsItem from "../entities/components/tabsItem";
import Box from "@mui/material/Box";
import {Grid, Stack, styled, Tabs} from "@mui/material";
import DashboardLabel from "../entities/components/dashboardLabel";
import TransactionsLabel from "../entities/components/transactionsLabel";
import BalanceChart from "./balanceChart";
import CustomBarChart from "../entities/components/chart/customBarChart";
import Chart from "../entities/components/chart/chart";
import SwitchList from "../entities/components/switchList";
import CustomTable from "../shared/components/customTable";
import TradersAndSets from "./tradersAndSets";
import TabsHeader from "../entities/components/tabsHeader";
import IconAccount from "../shared/assets/images/icons/iconAccount";





const ExchangeAccountTabs= () => {
    const [value, setValue] = useState(0);

    return (
        <>
            <Box sx={{width: '100%'}}>

                <TabsHeader tabsName={[{name:'Дашборд',icon:<IconAccount/>}, {name:'История',icon:<IconAccount/>}]} tabsValue={value} onTabsChange={setValue} />

                <TabsItem value={value} index={0}>
                    <Grid container spacing={10} columns={12} wrap="wrap">
                        <Grid item xs={8}>
                            <Stack spacing={7}>
                                <DashboardLabel notProduct={true} updateTariff={true} balance={true}/>
                                <TransactionsLabel/>
                                <Chart title="Баланс">
                                    <BalanceChart description="label"/>
                                </Chart>
                                <Chart title="Прирост баланса">
                                    <BalanceChart description="label"/>
                                </Chart>
                                <Chart title="По трейдерам">
                                    <BalanceChart description="label"/>
                                </Chart>
                                <Stack spacing={7} direction="row" justifyContent="space-between">
                                    <Chart title="График" select={true}>
                                        <CustomBarChart/>
                                    </Chart>
                                    <SwitchList/>
                                </Stack>
                                <Chart title="По дням">
                                    <CustomBarChart/>
                                </Chart>
                                <Chart title="По часам" select={true}>
                                    <CustomBarChart/>
                                </Chart>
                                <CustomTable/>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <TradersAndSets/>
                        </Grid>
                    </Grid>

                </TabsItem>
                <TabsItem value={value} index={1}>
                    <CustomTable/>
                </TabsItem>
            </Box>
        </>
    );
};

export default ExchangeAccountTabs;