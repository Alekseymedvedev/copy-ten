import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {Alert, Divider, MenuItem, Snackbar, Stack} from "@mui/material";
import {FC, useEffect, useMemo, useState} from "react";
import IconClose from "../../../shared/assets/images/icons/iconClose";
import CustomInput from "../../../shared/UI/customInput";
import {useAddAccountMutation, useGetAccountsQuery, useUpdateAccountMutation} from "../../../store/API/userApi";
import {useInput} from "../../../hooks/useInput";
import CustomSelect from "../../../shared/UI/customSelect";
import {useGetServersQuery} from "../../../store/API/userApi";


interface IType {
    openModal: boolean;
    closeModal: any;
    account?: any;
    isOPenBtn?: boolean
    isError?: boolean
    updateAccount?: boolean
}

const AccountModal: FC<IType> = ({account, openModal, closeModal, isError, updateAccount}) => {
    const {data: isDataServer, isLoading: isLoadingDataServer} = useGetServersQuery('/servers')
    const [addAccount, {error: addError, isLoading}] = useAddAccountMutation()
    const [update] = useUpdateAccountMutation()

    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(updateAccount ? 2 : 1);
    const [serverNumber, setServerNumber] = useState(updateAccount ? account.server.id : '');
    const [errorInputLogin, setErrorInputLogin] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const login = useInput(updateAccount ? account.accountLogin : '', errorInputLogin)
    const password = useInput(updateAccount ? account.accountPassword : '', errorPassword)
    const [errorSelect, setErrorSelect] = useState(false);


    useEffect((() => {
        setOpen(openModal)
    }), [open, openModal])

    const handlerClose = (e: any) => {
        closeModal(false)
        setOpen(false);
        setErrorSelect(false);
        setErrorInputLogin(false);
        setErrorPassword(false);
        setServerNumber('')
        setStep(1)
        login.onChange(e)
        password.onChange(e)
    };

    const handlerAddAccount = () => {
        if (login.value !== '' && password.value !== '' && serverNumber !== '') {
            if (updateAccount) {
                update({
                    body: {
                        server_id: serverNumber,
                        login: login.value,
                        password: password.value
                    },
                    id: account.accountId
                })
            } else {
                addAccount({server_id: serverNumber, login: login.value, password: password.value}).then(() => {
                        setStep(step + 1)
                    }
                )
            }
        } else {
            if (serverNumber === '') {
                setErrorSelect(true)
            }
            if (login.value === '') {
                setErrorInputLogin(true)
            }
            if (password.value === '') {
                setErrorPassword(true)
            }
        }
    };


    return (
        <>
            <Modal open={open} onClose={handlerClose}>
                <Box sx={{maxWidth: 460}}>
                    <Snackbar
                        anchorOrigin={{vertical: 'top', horizontal: 'center',}}
                        open={step === 3}
                    >
                        <Alert severity={addError ? "error" : "success"} icon={false}>
                            {addError ? 'Ошибка' : 'Успешно!'}
                        </Alert>
                    </Snackbar>
                    <Stack onClick={handlerClose} sx={{position: "absolute", top: 14, right: 28, cursor: "pointer"}}>
                        <IconClose/>
                    </Stack>
                    <Stack className="h2 white-90" sx={{mb: 7}}>{updateAccount ?'Поторить':'Добавить счет'}</Stack>
                    <Divider variant="fullWidth" sx={{mb: 7}}/>
                    {
                        (step === 1) ?
                            <div className="h2">
                                <span>Добавить новый</span>
                                <span className="blue"> Forex счет</span>
                                <span>?</span>
                            </div>
                            : (step === 2) ?
                                <Stack justifyContent="flex-end" spacing={7} sx={{mt: 7}}>
                                    <CustomInput label="Номер счета" dataInput={login} inputType="text"/>
                                    <CustomInput label="Пароль от счета" dataInput={password}/>
                                    <Stack direction="row" justifyContent="space-between" spacing={7}>
                                        <span className="subHeadersBold white-90">Сервер счета</span>
                                        <CustomSelect
                                            width={152}
                                            defaultValue={updateAccount ? account.server.title : "Выбрать сервер"}
                                            optionValue={setServerNumber}
                                            options={isDataServer?.data}
                                            isError={errorSelect}
                                        />
                                    </Stack>
                                </Stack>
                                :
                                (step === 3 && addError) ?
                                    <div className="h2">
                                        <span className="red">Ошибка!</span>
                                        <span> Заявка на добавление счета не отправлена</span>
                                    </div>
                                    : <div className="h2">
                                        <span className="green">Успешно!</span>
                                        <span> Заявка на добавление счета отправлена</span>
                                    </div>

                    }
                    <Stack direction="row" justifyContent="flex-end" spacing={7} sx={{mt: 7}}>
                        {
                            (step === 3) ?
                                null
                                :
                                <Button onClick={handlerClose} color="error">Отмена</Button>

                        }

                        {
                            (step === 2) ?
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