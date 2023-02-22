import {Avatar, Button, Divider, Stack, Tabs} from "@mui/material";
import React, {FC, useState} from "react";
import Box from "@mui/material/Box";
import TabsItem from "../entities/components/tabsItem";
import Tab from "@mui/material/Tab";
import CustomLineChart from "../entities/components/chart/customLineChart";
import {Area, AreaChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import CustomAxisTick from "../entities/components/chart/customAxisTick";
import {chartData} from "../data/chart";
import NickName from "../shared/components/nickName";

interface IType {
    name?: string;

}

const TradersAndSets: FC<IType> = ({name,}) => {
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
            <Box sx={{
                width: '100%',
                padding: `8px 14px`,
                background: `linear-gradient(180deg, rgba(31, 31, 31, 0) 0%, #1F1F1F 100%)`,
                border: `0.5px solid #3C3C3C`,
                borderRadius: 2.5,
                flexGrow: 1
            }}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Трейдеры" {...a11yProps(0)} />
                        <Tab label="Сеты" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <Divider/>
                <Stack className="subHeadersBold white-80">7/15</Stack>
                <TabsItem value={value} index={0}>
                    <Stack
                        sx={{
                            padding: `14px`,
                            background: `linear-gradient(180deg, rgba(31, 31, 31, 0) 0%, #1F1F1F 100%)`,
                            border: `0.5px solid #3C3C3C`,
                            borderRadius: 2.5,
                            flexGrow: 1
                        }}
                    >
                        <NickName name="NICKNAME_NICKNAME" number="18050009" avatar="" justifyContent="space-between"/>


                        <Stack sx={{width: '100%', height: 54, mb:8}}>
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
                        <Button sx={{mb:4}} fullWidth variant="outlined" color="neutral">Настройки</Button>
                        <Button fullWidth variant="contained" color="error">Отключить</Button>
                    </Stack>

                </TabsItem>
                <TabsItem value={value} index={1}>
                </TabsItem>
            </Box>
        </>
    );
};
export default TradersAndSets;