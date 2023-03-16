import React, {FC, useState} from 'react';
import BalanceChart from "./balanceChart";
import Chart from "../entities/components/chart/chart";
import { Divider, Grid, Stack, useMediaQuery} from "@mui/material";
import Button from "@mui/material/Button";
import IconConnected from "../shared/assets/images/icons/iconConnected";
import SimpleModal from "../entities/components/modal/simpleModal";
import IconTraders from "../shared/assets/images/icons/iconTraders";
import IconSet from "../shared/assets/images/icons/iconSet";
import Paper from "@mui/material/Paper";
import NickName from "../shared/components/nickName";
import {Link} from "react-router-dom";
import CustomAreaChart from "../entities/components/chart/customAreaChart";
import {chartData} from "../data/chart";
import CurrentValues from "../entities/components/currentValues";

interface IType {
    adminSet?: boolean
}

const Set: FC<IType> = ({adminSet}) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    const [openModalConnection, setOpenModalConnection] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Paper>
                <Stack direction="row" spacing={7} alignItems="center" sx={{mb: 7}}>
                    <IconSet/>
                    <span className="h2 white-90">Сет EZMONEY</span>
                </Stack>
                <Divider variant="fullWidth" sx={{mb: 7, width: `103%`}}/>
                <Grid
                    direction={!mediaQuery ? "column-reverse" : "row"}
                    container
                    spacing={10}
                    columns={12}
                    wrap="wrap"
                    sx={{mb: 7}}
                >
                    <Grid item xs={12} md={5}>
                        <Chart title="Доходность" icon="bad" select={true} defaultValue="Январь">
                            <BalanceChart/>
                        </Chart>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Stack className="subHeaders white-80" spacing={7}>
                            <p>
                                Velit nunc ultrices sit est et varius. Tellus accumsan pretium sollicitudin elit purus
                                morbi.
                                Euismod fames ullamcorper eget eget mi nisi aliquet tortor. Etiam aenean mauris integer
                                maecenas
                                et in. Volutpat dolor id vulputate non sed arcu. Justo ut nisl non elit odio cursus
                                auctor.
                                Aliquam tincidunt nunc ultricies dignissim aenean montes feugiat.
                                Vestibulum leo augue magna in morbi montes malesuada diam. Faucibus velit risus orci dui
                                pellentesque fusce cursus magna. Quam tristique enim id.

                            </p>
                            <p>
                                Velit nunc ultrices sit est et varius. Tellus accumsan pretium sollicitudin elit purus
                                morbi.
                                Euismod fames ullamcorper eget eget mi nisi aliquet tortor. Etiam aenean mauris integer
                                maecenas
                                et in. Volutpat dolor id vulputate non sed arcu. Justo ut nisl non elit odio cursus
                                auctor.
                                Aliquam tincidunt nunc ultricies dignissim aenean montes feugiat.
                                Vestibulum leo augue magna in morbi montes malesuada diam. Faucibus velit risus orci dui
                                pellentesque fusce cursus magna. Quam tristique enim id.

                            </p>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container spacing={10} columns={12} wrap="wrap" alignItems="stretch">
                    <Grid item xs={16} md={5}>
                        {
                            adminSet ?
                                <Stack direction="row" spacing={7}>
                                    <Button
                                        // onClick={() => setOpenModalConnection(true)}
                                        variant="contained"
                                        color="error"
                                        sx={{height: 48}}
                                    >Удалить</Button>
                                    <Button
                                        // onClick={() => setOpenModalConnection(true)}
                                        fullWidth
                                        color="neutral"
                                        sx={{height: 48}}
                                    >Настройки</Button>
                                </Stack>

                                :
                                <Button
                                    onClick={() => setOpenModalConnection(true)}
                                    fullWidth
                                    variant="gardient"
                                    color="warning"
                                    startIcon={<IconConnected/>}
                                    sx={{height: 48}}
                                >Подключиться</Button>
                        }

                    </Grid>
                    <Grid item xs={16} md={7}>
                        <Button fullWidth color="neutral" startIcon={<IconTraders/>} sx={{height: 48}}
                                onClick={() => setOpenModal(true)}>
                            Подключенные трейдеры
                        </Button>
                    </Grid>
                </Grid>
                <SimpleModal title="Подключение трейдера" openModal={openModalConnection}
                             closeModal={setOpenModalConnection}>
                    <div className="h2"> на счет Мой счет 1?
                        <span>Подключить сет</span>
                        <span className="yellow">&nbsp;EZMONEY&nbsp;</span>
                        <span>на счет</span>
                        <span className="blue">&nbsp; Мой&nbsp;счет1&nbsp;</span>
                        <span>?</span>
                    </div>
                </SimpleModal>
                <SimpleModal maxWidth={1140} title="Настройки Сет EZMONEY" openModal={openModal} closeModal={setOpenModal}>
                    {/*<Chip label="Подключенные трейдеры" icon={<IconTraders/>}*/}
                    {/*      sx={{width: `100%`, height: 48, justifyContent: "flex-start",mb:7}}/>*/}

                    {/*<Paper>*/}
                    {/*    <Stack className="subHeaders white-80" spacing={7}>*/}
                    {/*        <p>*/}
                    {/*            Velit nunc ultrices sit est et varius. Tellus accumsan pretium sollicitudin elit purus*/}
                    {/*        </p>*/}
                    {/*        <p>*/}
                    {/*            Velit nunc ultrices sit est et varius. Tellus accumsan pretium sollicitudin elit purus*/}
                    {/*        </p>*/}
                    {/*    </Stack>*/}
                    {/*</Paper>*/}
                    <Grid container spacing={10} columns={14} wrap="wrap" alignItems="center">
                        <Grid item xs={14} md={3}>
                            <NickName name="NICKNAME_NICKNAME" number="18050009" direction="row-reverse"
                                      justifyContent="flex-end"/>
                        </Grid>
                        <Grid item xs={14} md={4}>
                            <CustomAreaChart
                                height={64}
                                data={chartData}
                                dataArea={[{
                                    dataKey: "uv",
                                    stroke: "#6FCF97",
                                    fill: "#29312C"
                                },]}/>
                        </Grid>
                        <Grid item xs={14} md={5}>
                            <CurrentValues/>
                        </Grid>
                        <Grid item xs={14} md={2}>
                          <Button component={Link} to="/" variant="outlined" color="info">Страница</Button>
                        </Grid>
                    </Grid>
                </SimpleModal>
            </Paper>
        </>
    );
};

export default Set;