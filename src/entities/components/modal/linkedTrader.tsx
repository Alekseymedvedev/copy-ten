import React, {FC, useEffect, useState} from 'react';
import {Box, Button, Divider, Modal, Skeleton, Snackbar, Stack} from "@mui/material";
import IconClose from "../../../shared/assets/images/icons/iconClose";
import IconPlus from "../../../shared/assets/images/icons/iconPlus";
import TraderItem from "../TraderItem";
import {useDeleteTraderMutation, useGetAllLinkedTradersQuery} from "../../../store/API/tradeSetsApi";
import SimpleModal from "./simpleModal";
import AddTraderModal from "./addTraderModal";
import SettingSetAndTraderModal from "./settingSetAndTraderModal";


interface IType {
    id?: number | string;
    title?: string;
    closeModal?: any;
    openModal: boolean;
}

const LinkedTrader: FC<IType> = ({id, title, openModal, closeModal}) => {
    const {data: dataLinkedTraders, isLoading} = useGetAllLinkedTradersQuery(id)
    const [deleteTrader] = useDeleteTraderMutation()

    const [open, setOpen] = useState(false);
    const [openModalAddTrader, setOpenModalAddTrader] = useState(false);
    const [openModalSettingsTrader, setOpenModalSettingsTrader] = useState(false);
    const [idTrader, setIdTrader] = useState('');
    const [idTraderSubscribe, setIdTraderSubscribe] = useState('');

    useEffect((() => {
        setOpen(openModal)
    }), [open, openModal])
    const handleAddTrader = () => {
        // setOpenModal(false)
        setOpenModalAddTrader(true)
    }
    const handleClose = (e: any) => {
        e.preventDefault()
        closeModal(false)
        setOpen(false)
    };

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{maxWidth: 1140}}>
                    <Stack onClick={handleClose} sx={{position: "absolute", top: 14, right: 28, cursor: "pointer"}}>
                        <IconClose/>
                    </Stack>
                    <Stack className="h2 white-90" sx={{mb: 7}}>{title}</Stack>
                    <Divider variant="fullWidth" sx={{mb: 7}}/>
                    <Stack spacing={7}>
                        <Button
                            fullWidth
                            onClick={handleAddTrader}
                            startIcon={<IconPlus/>}
                            sx={{height: 48, justifyContent: 'flex-start', color: '#BDBDBD'}}
                        >
                            Добавить трейдера
                        </Button>
                        {
                            isLoading ?
                                <Skeleton variant="rounded" width={`100%`} height={68}/>
                                :
                                dataLinkedTraders?.data &&
                                dataLinkedTraders?.data.map((item: any) =>
                                    <Stack
                                        key={item.id}
                                        onClick={() => {
                                        setIdTraderSubscribe(item.id)
                                        setIdTrader(item.trader.id)
                                    }}>
                                        <TraderItem

                                            isSelect
                                            id={item.id}
                                            stats={item.trader.stats}
                                            graph={item.trader.graph}
                                            name={item.trader.name}
                                            strategy={item.trader.strategy}
                                            openModal={setOpenModalSettingsTrader}
                                            deleteTrader={deleteTrader}
                                        />
                                    </Stack>
                                )
                        }
                    </Stack>
                </Box>
            </Modal>
            {
                openModalAddTrader &&
                <AddTraderModal id={id} title="Добавить трейдера" openModal={openModalAddTrader}
                                closeModal={setOpenModalAddTrader}/>
            }
            {
                openModalSettingsTrader &&
                <SettingSetAndTraderModal
                    idTraderSubscribe={idTraderSubscribe}
                    updateSettings
                    idTrader={idTrader}
                    maxWidth={620}
                    title="Настройки трейдера"
                    openModal={openModalSettingsTrader}
                    closeModal={setOpenModalSettingsTrader}/>
            }
        </>
    );
};

export default LinkedTrader;