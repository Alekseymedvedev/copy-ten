import {FC, useEffect, useState} from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {Divider, Stack} from "@mui/material";
import IconClose from "../../../shared/assets/images/icons/iconClose";
import * as React from "react";
import CustomRange from "../../../shared/components/customRange";
import CopyTradingModalChild from "./copyTradingModalChild";
import Parameters from "../parameters";
import {setParametersSlice} from "../../../store/slice/parametersSlice";
import {useAppDispatch} from "../../../hooks/useRedux";
import {useGetSubscribesSettingsQuery} from "../../../store/API/subscribesApi";


interface IType {
    children?: any;
    maxWidth?: number;
    openModal: boolean;
    closeModal?: any;
    isOPenBtn?: boolean;
    skip?: boolean;
    idTrader?: any
    idTraderSubscribe?: any
    trader?: any
    nameTrader?: any
    idAccount?: any
    nameAccount?: any
}

const CopyTradingModalSettings: FC<IType> = ({
                                                 children,
                                                 maxWidth,
                                                 openModal,
                                                 closeModal,
                                                 isOPenBtn,
                                                 idTrader,
                                                 idTraderSubscribe,
                                                 trader,
                                                 skip,
                                                 nameTrader,
                                                 idAccount,
                                                 nameAccount,
                                             }) => {
   const {data:dataSettings, isUninitialized} = useGetSubscribesSettingsQuery(idTraderSubscribe,{skip})

    const [open, setOpen] = useState(false);
    const [openModalChild, setOpenModalChild] = useState(false);
    const [step, setStep] = useState(2);
    const [error, setError] = useState(undefined);

    const {addRisk, addMaxLot, addMinLot} = setParametersSlice.actions
    const dispatch = useAppDispatch()

    useEffect((() => {
        setOpen(openModal)
        // setSkip(idTraderSubscribe ? true : false)
    }), [open, openModal,error])
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        closeModal(false)
        setOpen(false);
        setStep(1)
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
                                {children}
                            </div>
                            :
                            (step === 2) ?
                                <Stack spacing={7}>

                                    <CustomRange onChange={handleRisk} title="Риск" defaultValue={dataSettings?.risk}
                                                 required
                                                 isSwitch
                                                 isSliderRange/>
                                    <CustomRange onChange={handleMaxLot} title="Макс. лот"
                                                 defaultValue={dataSettings?.max_lot}
                                                 required isSwitch
                                                 isSliderRange/>
                                    <CustomRange onChangeSwift={handleMinLot} title="Мин. лот"
                                                 isSwitchChecked={false}
                                                 required
                                                 isSwitch/>
                                    <Parameters
                                        traderSymbol
                                        traderId={idTrader}
                                        symbolSettings={dataSettings?.exclude_symbols}
                                        hoursSettings={dataSettings?.exclude_hours}
                                        daySettings={dataSettings?.exclude_days}
                                    />
                                </Stack>
                                // :
                                // (step === 3) ?
                                //     <div className="h2">
                                //         {
                                //             error ?
                                //                 <>
                                //                     <span className="red">Ошибка!</span>
                                //                     <span>&nbsp;Трейдер
                                //                         <span className="yellow">&nbsp;{nameTrader}&nbsp;</span>
                                //                         не подключен на Ваш счет&nbsp;
                                //                     </span>
                                //                     <span className="blue">{nameAccount}</span>
                                //                     <span>!</span>
                                //                 </>
                                //                 :
                                //                 <>
                                //                     <span className="green">Успешно!</span>
                                //                     <span>&nbsp;Трейдер
                                //                         <span className="yellow">&nbsp;{nameTrader}&nbsp;</span>
                                //                         подключен на Ваш счет&nbsp;</span>
                                //                     <span className="blue">{nameAccount}</span>
                                //                     <span>!</span>
                                //                 </>
                                //         }
                                //
                                //     </div>
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
            <CopyTradingModalChild
                idAccount={idAccount}
                nameAccount={nameAccount}
                idTrader={idTraderSubscribe}
                nameTrader={nameTrader}
                step={step}
                setStep={setStep}
                openModal={openModalChild}
                closeModal={setOpenModalChild}
                isError={setError}
            />
        </>
    );
}
export default CopyTradingModalSettings;