import React, {FC, useEffect, useState} from 'react';
import {Box, Button, Divider, Modal, Snackbar, Stack} from "@mui/material";
import IconClose from "../../../shared/assets/images/icons/iconClose";
import CustomRange from "../../../shared/components/customRange";
import Parameters from "../parameters";
import {useAppDispatch, useAppSelector} from "../../../hooks/useRedux";
import {setParametersSlice} from "../../../store/slice/parametersSlice";
import {useSettingsTraderMutation, useUpdateSettingsTraderMutation} from "../../../store/API/tradeSetsApi";


interface IType {
    maxWidth?: number;
    title?: string;
    idTrader?: any;
    id?: any;
    closeModal?: any;
    openModal: boolean;
    updateSettings?: boolean;
}

const SettingSetAndTraderModal: FC<IType> = ({id,idTrader, title, openModal, closeModal,updateSettings}) => {
    const dispatch = useAppDispatch()
    const {addRisk, addMaxLot, addMinLot} = setParametersSlice.actions
    const {
        risk,
        maxLot,
        minLot,
        excludeSymbols,
        excludeDays,
        excludeHours
    } = useAppSelector(state => state.setParametersReducer)

    const [addSettingsTrader] = useSettingsTraderMutation()
    const [updateSettingsTrader] = useUpdateSettingsTraderMutation()

    const [open, setOpen] = useState(false);

    useEffect((() => {
        setOpen(openModal)
    }), [open, openModal])

    const handleClose = (e:any) => {
        e.preventDefault()
        closeModal(false)
        setOpen(false)
    };

    const handleRisk = (value: any) => {
        dispatch(addRisk(value))
    }
    const handleMaxLot = (value: any) => {
        dispatch(addMaxLot(value))
    }
    const handleMinLot = (value: any) => {
        dispatch(addMinLot(value))
    }
    const handleAddSettingsTrader = () => {
        if (updateSettings) {
            updateSettingsTrader({
                idTrader,
                body: {
                    risk,
                    max_lot: maxLot,
                    min_lot: minLot,
                    exclude_symbols: excludeSymbols,
                    exclude_days: excludeDays,
                    exclude_hours: excludeHours
                }
            }).then(() => {
                closeModal()
            })
        } else {
            addSettingsTrader({
                idSet: id,
                idTrader,
                body: {
                    settings: {
                        risk,
                        max_lot: maxLot,
                        min_lot: minLot,
                        exclude_symbols: excludeSymbols,
                        exclude_days: excludeDays,
                        exclude_hours: excludeHours
                    }
                }
            }).then(() => {
                closeModal()
            })
        }
    }


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{maxWidth:620}}>
                    <Stack onClick={handleClose} sx={{position: "absolute", top: 14, right: 28, cursor: "pointer"}}>
                        <IconClose/>
                    </Stack>
                    <Stack className="h2 white-90" sx={{mb: 7}}>{title}</Stack>
                    <Divider variant="fullWidth" sx={{mb: 7}}/>
                    <Stack spacing={7}>
                        <CustomRange onChange={handleRisk} step={1} minValue={0} maxValue={100}
                                     title="Риск в процентах"
                                     isSliderRange/>
                        <CustomRange onChange={handleMaxLot} minValue={0} step={1} maxValue={500} title="Макс. лот *"
                                     isSwitch isSliderRange/>
                        <CustomRange onChangeSwift={handleMinLot} title="Мин. лот" required isSwitch/>
                        <Parameters/>

                        <Stack direction="row" justifyContent="flex-end" spacing={7}>
                            <Button onClick={() => setOpen(false)} color="error">Отмена</Button>
                            <Button
                                onClick={handleAddSettingsTrader}
                                color="success">Сохранить</Button>
                        </Stack>
                    </Stack>
                </Box>
            </Modal>
        </>
    );
};

export default SettingSetAndTraderModal;