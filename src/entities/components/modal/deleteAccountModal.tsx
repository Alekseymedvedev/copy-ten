import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {Alert, Divider, MenuItem, Snackbar, Stack} from "@mui/material";
import {FC, useEffect, useMemo, useState} from "react";
import IconClose from "../../../shared/assets/images/icons/iconClose";
import CustomInput from "../../../shared/UI/customInput";
import {useAddAccountMutation, useDeleteAccountMutation, useGetAccountsQuery} from "../../../store/API/userApi";
import {useInput} from "../../../hooks/useInput";
import CustomSelect from "../../../shared/UI/customSelect";
import {useGetServersQuery} from "../../../store/API/userApi";
import {useNavigate} from "react-router-dom";


interface IType {
    accountId?: any;
    accountName?: any;
    product?: any;
    openModal: boolean;
    closeModal: any;
}

const AccountModal: FC<IType> = ({accountId, product, accountName, openModal, closeModal}) => {
    const navigate = useNavigate()

    const [deleteAccount, {error,isLoading}] = useDeleteAccountMutation()
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);
    useEffect((() => {
        setOpen(openModal)
    }), [open, openModal])

    const handlerClose = () => {
        closeModal(false)
        setOpen(false);
        setStep(1)
    };
    const deleteAcc = () => {
        deleteAccount(accountId).then(()=>{
            try {
                if(!error && !isLoading){
                    navigate('/')
                }
            }catch{
                console.log('error')
            }

        })
        setStep(3)
    }


    return (
        <>
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'center',}}
                open={step === 3}
            >
                <Alert severity={error ? "error" : "success"} icon={false}>
                    {error ? 'Ошибка' : 'Успешно!'}
                </Alert>
            </Snackbar>
            <Modal
                open={open}
                onClose={handlerClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >

                <Box sx={{maxWidth: 620}}>
                    <Stack onClick={handlerClose} sx={{position: "absolute", top: 14, right: 28, cursor: "pointer"}}>
                        <IconClose/>
                    </Stack>
                    <Stack className="h2 white-90" sx={{mb: 7}}>Добавить счет</Stack>

                    <Divider variant="fullWidth" sx={{mb: 7}}/>
                    {
                        (step === 1) ?
                            <div className="h2">
                                <span className="red">Удалить </span>
                                <span>Счет&nbsp;{accountName}?</span>
                            </div>
                            :
                            <Stack justifyContent="flex-end" spacing={7} sx={{mt: 7}}>
                                <div className="h2">
                                    <span className="blue">Счет&nbsp;{accountName}&nbsp;</span>
                                    <span>был задействован для продукта</span>
                                        <span className="green">&nbsp;{product}</span>
                                    <span>. При удалении счета,</span>
                                    <span className="green"> продукт будет перенесен в архив.</span>
                                </div>
                            </Stack>


                    }
                    <Stack direction="row" justifyContent="flex-end" spacing={7} sx={{mt: 7}}>
                        <Button onClick={handlerClose} color="error">Отмена</Button>

                        {
                            (step === 1) ?
                                <Button onClick={() => setStep(step + 1)} color="success">Продожить</Button>
                                :
                                <Button onClick={deleteAcc} color="success">Подтвердить</Button>
                        }

                    </Stack>
                </Box>
            </Modal>
        </>
    );
}


export default AccountModal