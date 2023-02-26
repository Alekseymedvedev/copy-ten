import React, {FC, useState} from 'react';
import BalanceChart from "./balanceChart";
import Chart from "../entities/components/chart/chart";
import {Grid, Stack} from "@mui/material";
import Button from "@mui/material/Button";
import IconConnected from "../shared/assets/images/icons/iconConnected";
import SimpleModal from "../entities/components/modal/simpleModal";
import IconTraders from "../shared/assets/images/icons/iconTraders";
import IconSet from "../shared/assets/images/icons/iconSet";

interface IType {
    children?: any
}

const CopyTradingSet: FC<IType> = ({children}) => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (event: React.SyntheticEvent) => {
        event.stopPropagation()
        setOpenModal(true)
    };
    return (
        <>
            <Stack spacing={7} sx={{p:`14px 28px`, border: `0.5px solid #3C3C3C`, borderRadius: 2.5}}>
                <Stack direction="row" spacing={7} alignItems="center">
                    <IconSet/>
                    <span className="h2 white-90">Сет EZMONEY</span>

                </Stack>
                <Grid container spacing={10} columns={12} wrap="wrap">
                    <Grid item xs={5}>
                        <Chart title="Доходность" select={true}>
                            <BalanceChart/>
                        </Chart>
                    </Grid>
                    <Grid item xs={7}>
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
                <Grid container spacing={10} columns={12} wrap="wrap">
                    <Grid item xs={5}>
                        <Button
                            onClick={()=>setOpenModal(true)}
                            fullWidth
                            variant="gardient"
                            color="warning"
                            startIcon={<IconConnected/>}
                        >Подключиться</Button>
                    </Grid>
                    <Grid item xs={7}>
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
            </Stack>
        </>
    );
};

export default CopyTradingSet;