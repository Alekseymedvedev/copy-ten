import {FC, useEffect, useState} from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Divider, Stack} from "@mui/material";
import IconClose from "../../../shared/assets/images/icons/iconClose";
import * as React from "react";
import CustomRange from "../../../shared/components/customRange";
import CopyTradingModalChild from "./copyTradingModalChild";
import Parameters from "../parameters";
import {setParametersSlice} from "../../../store/slice/parametersSlice";
import {useAppDispatch} from "../../../hooks/useRedux";


interface IType {
    maxWidth?: number;
    openModal: boolean;
    closeModal?: any;
    isOPenBtn?: boolean;
    idTrader?: any
    idAccount?: any
    nameAccount?: any
}

const CopyTradingModalSettings: FC<IType> = ({
                                         maxWidth,
                                         openModal,
                                         closeModal,
                                         isOPenBtn,
                                         idTrader,
                                         idAccount,
                                         nameAccount,
}) => {
    const [open, setOpen] = useState(false);
    const [openModalChild, setOpenModalChild] = useState(false);
    const [step, setStep] = useState(1);

    const {addRisk,addMaxLot,addMinLot,addExcludeDays,addExcludeHours,addExcludeSymbols} = setParametersSlice.actions
    const dispatch = useAppDispatch()


    useEffect((() => {
        setOpen(openModal)
    }), [open, openModal])
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        closeModal(false)
        setOpen(false);
        setStep(1)
    };

    const handleRisk=(value:any)=>{
        dispatch(addRisk(value))
    }
    const handleMaxLot=(value:any)=>{
        dispatch(addMaxLot(value))
    }
    const handleMinLot=(value:any)=>{
        dispatch(addMinLot(value))
    }
    return (
        <>

            {isOPenBtn && <Button onClick={handleOpen}>Open modal</Button>}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >

                <Box sx={{maxWidth: maxWidth ? maxWidth : 620}}>
                    <Stack onClick={handleClose} sx={{position: "absolute", top: 14, right: 28, cursor: "pointer"}}>
                        <IconClose/>
                    </Stack>
                    <Stack className="h2 white-90" sx={{mb: 7}}>Подключение трейдера</Stack>

                    <Divider variant="fullWidth" sx={{mb: 7}}/>
                    {
                        (step === 1) ?
                            <div className="h2">
                                <span>Подключить трейдера</span>
                                <span className="green">&nbsp;Nickname_Nickname&nbsp;</span>
                                <span>на счет</span>
                                <span className="blue">&nbsp;Мой счет 1&nbsp;</span>
                                <span>?</span>
                            </div>
                            :
                            (step === 2) ?
                                <Stack spacing={7}>
                                    {/*<Stack className="h2 yellowBg" justifyContent="space-between"*/}
                                    {/*       sx={{height: 122, p: 7, borderRadius: `10px`}}>*/}
                                    {/*    <span>Используемый <br/> депозит</span>*/}
                                    {/*    <span className="yellow">1239$</span>*/}
                                    {/*</Stack>*/}
                                    <CustomRange onChange={handleRisk} title="Риск в процентах" required isSwitch isSliderRange/>
                                    <CustomRange onChange={handleMaxLot} title="Макс. лот" required isSwitch isSliderRange/>
                                    <CustomRange onChangeSwift={handleMinLot} title="Мин. лот" required isSwitch/>
                                    <Parameters/>
                                </Stack>
                                :
                                (step === 3) ?
                                    <div className="h2">
                                        <span className="green">Успешно!</span>
                                        <span>&nbsp;Успешно! Трейдер Nickname_Nickname подключен на Ваш счет&nbsp;</span>
                                        <span className="blue">Мой счет 1</span>
                                        <span>!</span>
                                    </div>
                                    : null

                    }
                    <Stack direction="row" justifyContent="flex-end" spacing={7} sx={{mt: 7}}>
                        {
                            step === 2 ?
                                <Button onClick={() => setStep(step - 1)} color="neutral">Назад</Button>
                                :
                                step === 3 ? null
                                    :
                                    <Button onClick={handleClose} color="error">Отклонить</Button>
                        }

                        {
                            step === 2 ?
                                <Button onClick={() => setOpenModalChild(true)} color="success">Продожить</Button>
                                :
                                step === 3 ?
                                    <Button onClick={() => {
                                        handleClose()
                                        setStep(1)
                                    }
                                    } color="success">Закрыть</Button>
                                    :
                                    <Button onClick={() => setStep(step + 1)} color="success">Продожить</Button>
                        }

                    </Stack>
                </Box>
            </Modal>
            <CopyTradingModalChild idAccount={idAccount} idTrader={idTrader} step={step} setStep={setStep} openModal={openModalChild}
                                   closeModal={setOpenModalChild}/>
        </>
    );
}
export default CopyTradingModalSettings;