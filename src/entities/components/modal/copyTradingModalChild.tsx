import {Alert, Box, Button, Divider, Modal, Snackbar, Stack} from "@mui/material";
import {FC, useEffect, useState} from "react";
import * as React from "react";
import IconClose from "../../../shared/assets/images/icons/iconClose";
import {useAppSelector} from "../../../hooks/useRedux";
import {
    useSubscribeTraderMutation,
    useUnsubscribeTraderMutation,
    useUpdateSettingsTraderMutation
} from "../../../store/API/tradersUserApi";


interface IType {
    maxWidth?: number;
    closeModal: any;
    openModal: boolean;
    step?: number;
    setStep?: (number: number) => void;
    idTrader?: any
    nameTrader?: any
    idAccount?: any
    nameAccount?: any
    isError?: any
}

const CopyTradingModalChild: FC<IType> = ({
                                              maxWidth,
                                              openModal,
                                              closeModal,
                                              step,
                                              setStep,
                                              idTrader,
                                              nameTrader,
                                              idAccount,
                                              nameAccount,
                                              isError,
                                          }) => {
    const [open, setOpen] = useState(false);
    const {
        risk,
        maxLot,
        minLot,
        excludeSymbols,
        excludeDays,
        excludeHours
    } = useAppSelector(state => state.setParametersReducer)

    const [subscribe, {error, isLoading}] = useSubscribeTraderMutation()
    const [updateSettings] = useUpdateSettingsTraderMutation()


    const [success, setSuccess] = useState(false)
    useEffect((() => {
        setOpen(openModal)
    }), [open, openModal])

    const handleClose = () => {
        closeModal(false)
        setOpen(false);

    };

    const handleSubscribe = () => {

        if (idAccount) {
            subscribe({
                idTrader,
                idAccount:0,
                body: {
                    settings: {
                        risk: risk,
                        max_lot: maxLot,
                        min_lot: minLot,
                        exclude_symbols: excludeSymbols,
                        exclude_days: excludeDays,
                        exclude_hours: excludeHours
                    }
                }
            }).then(() => {
                 handleClose()
                isError(true)
                if (!error && !isLoading && step && setStep) {
                    setStep(step + 1)
                    setSuccess(true)
                }

            })
        } else {
            updateSettings({
                idTrader,
                body: {
                    risk: risk,
                    max_lot: maxLot,
                    min_lot: minLot,
                    exclude_symbols: excludeSymbols,
                    exclude_days: excludeDays,
                    exclude_hours: excludeHours
                }
            }).then(() => {
                handleClose()
                if (!error && !isLoading && step && setStep) {
                    setSuccess(true)
                }
            })
        }

    }
    return (
        <>
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'center',}}
                open={success}
            >
                <Alert severity={error ? "error" : "success"} icon={false}>
                    {error ? "Ошибка!" : "Успешно!"}
                </Alert>
            </Snackbar>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{maxWidth: maxWidth ? maxWidth : 620}}>
                    <Stack onClick={handleClose} sx={{position: "absolute", top: 14, right: 28, cursor: "pointer"}}>
                        <IconClose/>
                    </Stack>
                    <Stack className="h2 white-90" sx={{mb: 7}}>Подключение трейдера</Stack>

                    <Divider variant="fullWidth" sx={{mb: 7}}/>

                    {
                        idAccount ?
                            <div className="h2">
                                <span>Подключить трейдера</span>
                                <span className="green">&nbsp;{nameTrader}&nbsp;</span>
                                <span>на счет</span>
                                <span className="blue">&nbsp;{nameAccount}&nbsp;</span>
                                <span>?</span>
                            </div>
                            :
                            <div className="h2">
                                <span>Сохранить настройки трейдера</span>
                                <span className="green">&nbsp;{nameTrader}&nbsp;</span>
                                <span>для счета</span>
                                <span className="blue">&nbsp;{nameAccount}&nbsp;</span>
                                <span>?</span>
                            </div>
                    }


                    <Stack direction="row" justifyContent="flex-end" spacing={7} sx={{mt: 7}}>
                        <Button onClick={handleClose} color="error">Отклонить</Button>
                        <Button onClick={handleSubscribe} color="success">Продожить</Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    );
};

export default CopyTradingModalChild;