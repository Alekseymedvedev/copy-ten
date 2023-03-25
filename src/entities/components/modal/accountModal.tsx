import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {Alert, Divider, Snackbar, Stack} from "@mui/material";
import {FC, useEffect, useState} from "react";
import IconClose from "../../../shared/assets/images/icons/iconClose";
import CustomInput from "../../../shared/UI/customInput";
import {useAddAccountMutation, useGetAccountsQuery} from "../../../store/API/userApi";
import {useInput} from "../../../hooks/useInput";
import CustomSelect from "../../../shared/UI/customSelect";
import {useGetServersQuery} from "../../../store/API/userApi";


interface ICustomModal {
    maxWidth?: number;
    openModal: boolean;
    closeModal: any;
    isOPenBtn?: boolean
    isError?: boolean
}

const AccountModal: FC<ICustomModal> = ({maxWidth, openModal, closeModal,  isError}) => {
    const {data:isDataServer} = useGetServersQuery('/servers')
    const [addAccount, { error: addError, isLoading}] = useAddAccountMutation()
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [serverNumber, setServerNumber] = useState('');
    const login = useInput('')
    const password = useInput('')

    useEffect((() => {
        setOpen(openModal)
    }), [open, openModal])

    const handlerClose = () => {
        closeModal(false)
        setOpen(false);
        setStep(1)
    };
    const handlerAddAccount = () => {
        if (login.value !== '' && password.value !== '') {
            addAccount({server_id: serverNumber, login: login.value, password: password.value}).then(() => {
                    if (!isLoading && !addError) {
                        setStep(step + 1)
                    }
                }
            )
        }
    };

    return (
        <>
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'center',}}
                open={step === 3}
            >
                <Alert severity={addError ? "error" : "success"} icon={false}>
                    {addError ? 'Ошибка' : 'Успешно!'}
                </Alert>
            </Snackbar>
            <Modal
                open={open}
                onClose={handlerClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >

                <Box sx={{maxWidth: maxWidth ? maxWidth : 620}}>
                    <Stack onClick={handlerClose} sx={{position: "absolute", top: 14, right: 28, cursor: "pointer"}}>
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
                                    <CustomInput label="Номер счета" dataInput={login}/>
                                    <CustomInput label="Пароль от счета" dataInput={password}/>
                                    <CustomSelect
                                        title="Сервер счета"
                                        defaultValue="Выбрать сервер"
                                        optionValue={setServerNumber}
                                        options={isDataServer.data}
                                    />
                                </Stack>
                                :
                                (step === 3 && addError) ?
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
                                    <Button onClick={handlerClose} color="error">Отклонить</Button>
                        }

                        {
                            (step === 2 && !isError) ?
                                <Button onClick={handlerAddAccount} color="success">Продожить</Button>
                                :
                                (step === 3 && !isError) ?
                                    <Button onClick={handlerClose} color="success">Закрыть</Button>
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