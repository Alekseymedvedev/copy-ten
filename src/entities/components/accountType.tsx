import React, {FC, useState} from 'react';
import {Button, Chip, Divider, IconButton, Stack, useMediaQuery} from "@mui/material";
import IconEdit from "../../shared/assets/images/icons/iconEdit";
import SimpleModal from "./modal/simpleModal";
import CustomInput from "../../shared/UI/customInput";
import {useInput} from "../../hooks/useInput";
import {useUpdateAccountMutation} from "../../store/API/userApi";
import {Server} from "../../types";

interface T {
    accountType?: Server;
    accountLogin?: number | string;
    accountNumber?: number | string;
    productType?: string;
}


const AccountType: FC<T> = ({
                                accountType,
                                accountLogin,
                                accountNumber,
                                productType
                            }) => {
    const [updateAccount] = useUpdateAccountMutation()
    const mediaQuery = useMediaQuery('(max-width:900px)');
    const [openModal, setOpenModal] = useState(false);
    const nameAccount = useInput('')
    const password = useInput('')
    const handlerEdit = () => {
        setOpenModal(false)
        updateAccount({
            body: {
                name: nameAccount.value,
                login: accountLogin,
                password: password.value,
                server_id: accountType?.id
            },
            login: accountLogin
        })
    }
    return (
        <Stack
            direction={mediaQuery ? "column" : "row"}
            alignItems={mediaQuery ? "center" : "flex-start"}
            spacing="auto"
            mb={4}
            sx={{padding: `8px 28px`}}
        >
            <Stack spacing={2}>
                <span className="subHeaders white-80">{accountNumber}</span>
                <Stack direction="row" spacing={4}>
                    <span className="h2 white-100">Имя счета</span>
                    <Stack
                        onClick={() => { setOpenModal(true)}}
                        sx={{zIndex: 100,cursor:'pointer'}}>
                        <IconEdit/>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction="row" spacing={4}>
                {
                    productType === "Копировальщик"
                        ? <Chip label="Копировальщик" color="success" sx={{pr:0,pl:0}}/>
                        : <Chip label="Робот" color="secondary" sx={{pr:0,pl:0}}/>
                }
                {
                    accountType?.type === 0 ?
                        <Chip label="Центовый" variant="filled" color="neutral" sx={{pr:0,pl:0}}/>
                        :
                        <Chip label="Долларовый" variant="filled" color="warning" sx={{pr:0,pl:0}}/>
                }

            </Stack>
            <SimpleModal title="Имя счета" openModal={openModal} closeModal={setOpenModal}>
                <Stack spacing={7}>
                    <CustomInput dataInput={nameAccount} label="Имя счета"/>
                </Stack>
                <Stack direction="row" justifyContent="flex-end" spacing={7} sx={{mt: 7}}>
                    <Button onClick={() => setOpenModal(false)} color="error">Отмена</Button>
                    <Button onClick={handlerEdit} color="success">Сохранить</Button>
                </Stack>
            </SimpleModal>
        </Stack>
    );
};

export default AccountType;