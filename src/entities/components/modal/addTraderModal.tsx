import React, {FC, useEffect, useState} from 'react';
import {Box, Button, Divider, Grid, Modal, Skeleton, Snackbar, Stack} from "@mui/material";
import IconClose from "../../../shared/assets/images/icons/iconClose";
import Paper from "@mui/material/Paper";
import NickName from "../../../shared/components/nickName";
import imgStrategyGrid from "../../../shared/assets/images/strategy.png";
import imgStrategyStopLoss from "../../../shared/assets/images/strategys-stop-loss.png";
import CustomAreaChart from "../chart/customAreaChart";
import CurrentValues from "../currentValues";
import {
    useGetAddLinkedTradersQuery,
} from "../../../store/API/tradeSetsApi";
import SettingSetAndTraderModal from "./settingSetAndTraderModal";


interface IType {
    id?: any;
    maxWidth?: number;
    title?: string;
    closeModal?: any;
    openModal: boolean;
}

const AddTraderModal: FC<IType> = ({id, maxWidth, title, openModal, closeModal}) => {

    const {data: dataAddLinkedTraders, isLoading} = useGetAddLinkedTradersQuery(id)

    const [openModalSettingsTrader, setOpenModalSettingsTrader] = useState(false);
    const [open, setOpen] = useState(false);
    const [idTrader, setIdTrader] = useState('');

    useEffect((() => {
        setOpen(openModal)
    }), [open, openModal])

    const handleClose = (e: any) => {
        e.preventDefault()
        closeModal(false)
        setOpen(false)
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{maxWidth: 1140}}>
                    <Stack onClick={handleClose} sx={{position: "absolute", top: 14, right: 28, cursor: "pointer"}}>
                        <IconClose/>
                    </Stack>
                    <Stack className="h2 white-90" sx={{mb: 7}}>{title}</Stack>
                    <Divider variant="fullWidth" sx={{mb: 7}}/>
                    <Stack spacing={7}>
                        {
                            isLoading ?
                                <Skeleton variant="rounded" width={`100%`} height={68}/>
                                :
                                dataAddLinkedTraders?.data &&
                                dataAddLinkedTraders?.data.map((item: any) =>
                                    <Paper key={item.id} sx={{height: 68, alignItems: "center"}}>
                                        <Grid container spacing={10} columns={14} wrap="wrap" alignItems="center">
                                            <Grid item xs={14} md={2}>
                                                <NickName name={item.name} number={item.id}
                                                          direction="row-reverse"
                                                          avatar={item.strategy === 'grid' ? imgStrategyGrid : imgStrategyStopLoss}
                                                          justifyContent="flex-end"/>
                                            </Grid>
                                            <Grid item xs={14} md={4}>
                                                <CustomAreaChart
                                                    height={52}
                                                    data={item.graph}
                                                    dataArea={[{
                                                        dataKey: "uv",
                                                        stroke: "#6FCF97",
                                                        fill: "#29312C"
                                                    },]}/>
                                            </Grid>
                                            <Grid item xs={14} md={6}>
                                                <CurrentValues
                                                    dropdown={item.stats?.dropdown}
                                                    balance={item.stats?.balance?.value}
                                                    depositLoad={item.stats?.deposit_load}
                                                    gainCurrentMonth={item.stats?.balance?.gain?.current_month}
                                                    gainAll={item.stats?.balance?.gain?.all}
                                                />
                                            </Grid>
                                            <Grid item xs={14} md={2}>
                                                {
                                                    item.already_linked ?
                                                        <Button color="info" sx={{
                                                            ml: 'auto',
                                                            display: 'block'
                                                        }}>Уже&nbsp;подключено</Button>
                                                        :
                                                        <Button
                                                            sx={{ml: 'auto', display: 'block'}}
                                                            onClick={() => {
                                                                setIdTrader(item.id)
                                                                setOpenModalSettingsTrader(true)
                                                            }}
                                                            color="success"
                                                        >Подключить</Button>
                                                }

                                            </Grid>
                                        </Grid>
                                    </Paper>
                                )
                        }
                        <Stack direction="row" justifyContent="flex-end" spacing={7}>
                            <Button
                                onClick={handleClose}
                                color="neutral">Закрыть</Button>
                        </Stack>
                    </Stack>
                </Box>
            </Modal>
            {
                openModalSettingsTrader &&
                <SettingSetAndTraderModal
                    skip
                    id={id}
                    idTrader={idTrader}
                    maxWidth={620}
                    title="Настройки трейдера"
                    openModal={openModalSettingsTrader}
                    closeModal={setOpenModalSettingsTrader}/>

            }

        </>
    );
};

export default AddTraderModal;