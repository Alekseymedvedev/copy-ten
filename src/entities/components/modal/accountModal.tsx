import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {Divider, IconButton, Snackbar, Stack, TextField} from "@mui/material";
import {FC, useEffect, useState} from "react";
import IconClose from "../../../shared/assets/images/icons/iconClose";
import CustomInput from "../../../shared/UI/customInput";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 620,
    width: `100%`,
    bgcolor: '#1F1F1F',
    border: `0.5px solid #3c3c3c`,
    borderRadius: 1,
    p: 14
};


interface ICustomModal {
    children?: any;
    openModal: boolean;
    closeModal?: any;
    isOPenBtn?: boolean
    isError?: boolean
}

const AccountModal: FC<ICustomModal> = ({children, openModal, closeModal, isOPenBtn, isError}) => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);

    useEffect((() => {
        setOpen(openModal)
    }), [open, openModal])
    const handleOpen = () => {
        setOpen(true);
        console.log(openModal)
        console.log(open)
    };
    const handleClose = () => {
        closeModal(false)
        setOpen(false);
    };

    return (
        <>
            {/*<Snackbar*/}
            {/*    anchorOrigin={{  vertical: 'top', horizontal: 'center',}}*/}
            {/*    open={true}*/}
            {/*    message="I love snacks"*/}
            {/*/>*/}
            {isOPenBtn && <Button onClick={handleOpen}>Open modal</Button>}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                // sx={{  filter: `blur(10px)`   }}
            >

                <Box sx={{...style,}}>
                    <Stack onClick={handleClose} sx={{position: "absolute", top: 14, right: 28, cursor: "pointer"}}>
                        <IconClose/>
                    </Stack>
                    <Stack className="h2 white-90" sx={{mb: 7}}>Добавить счет</Stack>

                    <Divider variant="fullWidth" sx={{mb: 7}}/>
                    {
                        (step === 1) ?
                            <div className="h2">
                                <span>Добавить новый</span>
                                <span className="blue"> Forex счет</span>
                                <span>?</span>
                            </div>
                            :
                            (step === 2) ?
                                <Stack justifyContent="flex-end" spacing={7} sx={{mt: 7}}>
                                    <CustomInput label="Номер счета"/>
                                    <CustomInput label="Пароль от счета"/>
                                </Stack>
                                :
                                (step === 3) ?
                                    <Stack spacing={7}>
                                        <div className="h2">
                                            <span>Введите код отправленный ботом на аккаунт</span>
                                            <span className="blue"> @ryabishin</span>
                                        </div>
                                        <div className="h2">
                                            <span className="white-90">Бот:</span>
                                            <span className="blue">https://t.me/+yyCB128FQ1JmYTIy</span>
                                        </div>
                                        <CustomInput label="Код"/>
                                    </Stack>
                                    : (step === 4 && !isError) ?
                                        <div className="h2">
                                            <span className="green">Успешно!</span>
                                            <span> Заявка на добавление счета отправлена</span>
                                        </div>
                                        : null

                    }
                    <Stack direction="row" justifyContent="flex-end" spacing={7} sx={{mt: 7}}>
                        {
                            (step === 3 && !isError) ?
                                <Button onClick={() => setStep(step - 1)} color="neutral">Назад</Button>
                                :
                                (step === 4 && !isError) ? null
                                    :
                                    <Button onClick={handleClose} color="error">Отклонить</Button>
                        }

                        {
                            (step === 4 && !isError) ?
                                <Button onClick={()=>{
                                    handleClose()
                                    setStep( 1)
                                }
                                } color="success">Закрыть</Button>
                                :
                                <Button onClick={() => setStep(step + 1)} color="success">Продожить</Button>
                        }

                    </Stack>
                </Box>
            </Modal>
        </>
    );
}


export default AccountModal