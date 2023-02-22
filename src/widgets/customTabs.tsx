import React, {FC, useState} from 'react';
import TabsItem from "../entities/components/tabsItem";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import {Grid, Stack, styled, Tabs} from "@mui/material";
import IconAccount from "../shared/assets/images/icons/iconAccount";
import DashboardLabel from "../entities/components/dashboardLabel";
import TransactionsLabel from "../entities/components/transactionsLabel";
import BalanceChart from "./balanceChart";
import CustomBarChart from "../entities/components/chart/customBarChart";
import CustomSwitch from "../shared/components/customSwitch";
import Chart from "../entities/components/chart/chart";
import SwitchList from "../entities/components/switchList";
import CustomTable from "../shared/components/customTable";
import TradersAndSets from "./tradersAndSets";


const AntTab = styled((props: any) => <Tab disableRipple {...props} />)(
    ({theme}) => ({


        border: ` 0.5px solid #3C3C3C`,
        borderRadius: 10,
        fontWeight: 600,
        fontSize: 16,
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&.MuiTab-labelIcon': {
            padding: `0 8px`,
            flexDirection: 'row',
            gap: 8,
        },
        '&.Mui-selected': {
            color: '#fff',

        },
        '&.MuiTabs-indicator': {
            display:'none'
        },
    }),
);

interface T {
    children?: any;
    tabsName: string[];
}

const CustomTabs: FC<T> = ({children, tabsName}) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <>
            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        {
                            tabsName && tabsName.map((item, index) =>
                                <AntTab key={item} icon={<IconAccount/>} label={item} {...a11yProps(index)} />
                            )
                        }
                    </Tabs>
                </Box>

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

export default CustomTabs;