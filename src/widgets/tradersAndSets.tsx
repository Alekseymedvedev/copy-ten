import {Avatar, Button, Chip, Divider, Stack, Tabs, useMediaQuery} from "@mui/material";
import React, {FC, useState} from "react";
import Box from "@mui/material/Box";
import TabsItem from "../entities/components/tabsItem";
import Tab from "@mui/material/Tab";
import CustomLineChart from "../entities/components/chart/customLineChart";
import {Area, AreaChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import CustomAxisTick from "../entities/components/chart/customAxisTick";
import {chartData} from "../data/chart";
import NickName from "../shared/components/nickName";
import TabsHeader from "../entities/components/tabsHeader";
import IconAccount from "../shared/assets/images/icons/iconAccount";
import IconTraders from "../shared/assets/images/icons/iconTraders";
import IconSet from "../shared/assets/images/icons/iconSet";
import Paper from "@mui/material/Paper";
import {Link} from "react-router-dom";
import IconSettings from "../shared/assets/images/icons/iconSettings";

interface IType {
    name?: string;

}

const TradersAndSets: FC<IType> = ({name,}) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    // const [value, setValue] = useState(0);
    //
    // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    //     setValue(newValue);
    // };
    //
    // function a11yProps(index: number) {
    //     return {
    //         id: `simple-tab-${index}`,
    //         'aria-controls': `simple-tabpanel-${index}`,
    //     };
    // }

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
                            background: '#1F1F1F'
                        }
                        : {mb: 7, padding: `8px 14px`, flexGrow: 1}
                }
                >
                <Stack direction="row" justifyContent="space-between" spacing={7} sx={{mb: 7}}>
                    <Chip label="Трейдеры" variant="filled" color="neutral" sx={{flexGrow: 1}}/>
                    <Chip label="Сеты" variant="outlined" color="neutral" sx={{flexGrow: 1}}/>
                </Stack>
                <Divider sx={{mb: 4}}/>
                <Stack className="subHeadersBold white-80" sx={{mb: 4}}>7/15</Stack>
                <Paper sx={{padding: `14px`, flexGrow: 1}}>
                    <NickName name="NICKNAME_NICKNAME" number="18050009" avatar="" justifyContent="space-between"/>
                    <Stack sx={{width: '100%', height: 54, mb: 8}}>
                        <ResponsiveContainer>
                            <AreaChart data={chartData}>
                                <Area dataKey="pv" stroke="#6FCF97" fill="#29312C"/>
                            </AreaChart>
                        </ResponsiveContainer>
                    </Stack>
                    <Stack mb={14} direction="row" alignItems="center" justifyContent="space-between" spacing={7}>
                        <Stack>
                            <span className="subHeaders white-90">Прирост</span>
                            <span className="subHeadersBold green">+22.49%</span>
                        </Stack>
                        <Divider orientation="vertical" variant="middle" flexItem/>
                        <Stack>
                            <span className="subHeaders white-90">Просадка</span>
                            <span className="subHeadersBold green">+22.49%</span>
                        </Stack>
                        <Divider orientation="vertical" variant="middle" flexItem/>
                        <Stack>
                            <span className="subHeaders white-90">Баланс</span>
                            <span className="subHeadersBold green">+22.49%</span>
                        </Stack>
                    </Stack>
                    <Stack direction="row" spacing={7} sx={{mb:7}}>
                        <Button color="neutral">
                            <IconSettings/>
                        </Button>
                        <Button fullWidth color="neutral" component={Link} to="/trader-dashboard">Дашборд трейдера</Button>
                    </Stack>
                    <Button fullWidth variant="contained" color="error">Отключить</Button>
                </Paper>
            </Paper>
            <Button fullWidth variant="contained" color="error" sx={{height: 76}}>Удалить счет</Button>
        </>
    );
};
export default TradersAndSets;