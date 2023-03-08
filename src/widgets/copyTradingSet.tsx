import React, {FC, useState} from 'react';
import BalanceChart from "./balanceChart";
import Chart from "../entities/components/chart/chart";
import {Divider, Grid, Stack, useMediaQuery} from "@mui/material";
import Button from "@mui/material/Button";
import IconConnected from "../shared/assets/images/icons/iconConnected";
import SimpleModal from "../entities/components/modal/simpleModal";
import IconTraders from "../shared/assets/images/icons/iconTraders";
import IconSet from "../shared/assets/images/icons/iconSet";
import Paper from "@mui/material/Paper";

interface IType {
    children?: any
}

const CopyTradingSet: FC<IType> = ({children}) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (event: React.SyntheticEvent) => {
        event.stopPropagation()
        setOpenModal(true)
    };
    return (
        <>
            <Paper>
                <Stack direction="row" spacing={7} alignItems="center"  sx={{mb:7}}>
                    <IconSet/>
                    <span className="h2 white-90">Сет EZMONEY</span>
                </Stack>
                <Divider  variant="fullWidth" sx={{mb: 7, width: `103%`}}/>
                <Grid
                    direction={!mediaQuery ? "column-reverse": "row" }
                    container
                    spacing={10}
                    columns={12}
                    wrap="wrap"
                    sx={{mb:7}}
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
                        <Button
                            onClick={()=>setOpenModal(true)}
                            fullWidth
                            variant="gardient"
                            color="warning"
                            startIcon={<IconConnected/>}
                            sx={{height: 48}}
                        >Подключиться</Button>
                    </Grid>
                    <Grid item xs={16} md={7}>
                        <Button
                            sx={{height: 48}}
                            fullWidth
                            color="neutral"
                            startIcon={<IconTraders/>}
                        >Подключенные трейдеры</Button>
                    </Grid>
                </Grid>
                <SimpleModal
                    title="Подключение трейдера"
                    openModal={openModal}
                    closeModal={setOpenModal}
                >
                    <div className="h2">  на счет Мой счет 1?
                        <span>Подключить сет</span>
                        <span className="yellow">&nbsp;EZMONEY&nbsp;</span>
                        <span>на счет</span>
                        <span className="blue">&nbsp; Мой&nbsp;счет1&nbsp;</span>
                        <span>?</span>
                    </div>
                </SimpleModal>
            </Paper>
        </>
    );
};

export default CopyTradingSet;