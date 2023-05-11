import React, {FC, useEffect, useState} from 'react';
import {Alert, Chip, Divider, Grid, Pagination, Snackbar, Stack, useMediaQuery} from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconClose from "../../../shared/assets/images/icons/iconClose";
import Button from "@mui/material/Button";
import {useUpdateProductMutation} from "../../../store/API/productApi";
import Paper from "@mui/material/Paper";
import {useGetAccountsQuery} from "../../../store/API/userApi";
import SimpleModal from "./simpleModal";

interface IType {
    openModal: boolean;
    closeModal: any;
    productId: number | string;
}

const SettingProductModal: FC<IType> = ({openModal, closeModal, productId}) => {
    const [accountsPage, setAccountsPage] = useState(1);
    const [updateAccount, {isLoading, error}] = useUpdateProductMutation()
    const {
        data: accountsData,
        error: accountsError,
        isLoading: accountsLoading
    } = useGetAccountsQuery(accountsPage, {refetchOnMountOrArgChange: true})
    const mediaQuery = useMediaQuery('(min-width:980px)')
    const [open, setOpen] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [step, setStep] = useState(1);
    const [forexAccountData, setForexAccountData] = useState({id: 0, login: ''});
    const [forexProductTitle, setForexProductTitle] = useState('');
    const [forexProductId, setForexProductId] = useState(0);
    useEffect((() => {
        setOpen(openModal)
    }), [open, openModal])

    const handlerClose = () => {
        closeModal(false)
        setOpen(false);
        setStep(1)
    };
    const handleChangeProductsPage = (event: React.ChangeEvent<unknown>, value: number) => {
        setAccountsPage(value);
    };
    const handleUpdate = () => {
        updateAccount({
            body: {forex_account_id: forexAccountData.id == 0 ? null : forexAccountData.id},
            id: productId
        }).then(() => {
            if (!error && !isLoading) {
                closeModal(false)
            }
        })
    };
    const handleChangeAccount = (productData: any, id: number, login: string) => {
        if (productData) setOpenUpdateModal(true)
        setForexProductTitle(productData?.title)
        setForexProductId(productData?.id)
        setForexAccountData({
            id: id,
            login: login ? login : ''
        })
    };
    const handleUpdateAccount = () => {
        updateAccount({
            body: {forex_account_id: null},
            id: forexProductId
        }).then(() => {
            handleUpdate()
            if (!error && !isLoading) {
                setOpenUpdateModal(false)
            }
        })
    };
    return (
        <>
            <Modal open={open} onClose={handlerClose}>

                <Box sx={{maxWidth: 780}}>
                    <Stack onClick={handlerClose} sx={{position: "absolute", top: 14, right: 28, cursor: "pointer"}}>
                        <IconClose/>
                    </Stack>
                    <Stack className="h2 white-90" sx={{mb: 7}}>Копировальщик до 10.000$</Stack>

                    <Divider variant="fullWidth" sx={{mb: 7}}/>
                    <Stack spacing={7}>
                        <Stack className="h2 white-100">Выберите счет для продукта</Stack>
                        {
                            accountsData && accountsData.data.map((item: any) =>
                                <Paper
                                    key={item.id}
                                    onClick={() => handleChangeAccount(item?.product?.product_data, item.id, item.login)}
                                    sx={{
                                        borderColor: forexAccountData.id === item.id ? '#6FCF97' : '',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Grid container spacing={10} columns={10} wrap="wrap" alignItems="center">
                                        <Grid item xs={5} md={2}>
                                            <Stack
                                                spacing={2}
                                                sx={{width: 120}}
                                            >
                                                <Stack
                                                    sx={{
                                                        display: 'block',
                                                        textOverflow: 'ellipsis',
                                                        overflow: 'hidden',
                                                        whiteSpace: 'nowrap',
                                                    }}
                                                    className="subHeaders white-90">
                                                    {item.login}
                                                </Stack>
                                                <Stack
                                                    sx={{
                                                        display: 'block',
                                                        textOverflow: 'ellipsis',
                                                        overflow: 'hidden',
                                                        whiteSpace: 'nowrap',
                                                    }}
                                                    className="subHeadersBold">
                                                    {item.name ? item.name : '---'}
                                                </Stack>
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={5} md={4}>
                                            {
                                                item.product?.assigned ?
                                                    <Chip
                                                        color="info"
                                                        label={`Подключено к ${item.product?.product_data?.title}`}
                                                        sx={{maxWidth: 210, width: `100%`, cursor: 'pointer'}}
                                                    />
                                                    :
                                                    <Chip
                                                        sx={{maxWidth: 210, width: `100%`, cursor: 'pointer'}}
                                                        variant="outlined"
                                                        color={forexAccountData.id === item.id ? "success" : "neutral"}
                                                        label={forexAccountData.id === item.id ? "Выбрано" : "Свободен для привязки"}
                                                    />
                                            }
                                        </Grid>
                                        <Grid item xs={10} md={4}>
                                            <Stack direction="row" justifyContent="space-between" spacing={7}>
                                                <Chip
                                                    label={item?.server.type === 0 ? "Центовый" : "Долларовый"}
                                                    variant="filled"
                                                    color={item?.server.type === 0 ? "neutral" : "warning"}
                                                    sx={{width: 108, pr: 0, pl: 0}}
                                                />
                                                <Stack alignItems="center" spacing={2}>
                                        <span className="subHeaders white-90">
                                          Прирост
                                        </span>
                                                    <span
                                                        className={
                                                            item.stats?.balance?.gain.percent > 0 ?
                                                                "subHeadersBold green"
                                                                : 'subHeadersBold red'
                                                        }
                                                    >
                                            {item.stats?.balance?.gain.percent}%
                                        </span>
                                                </Stack>
                                                <Divider orientation="vertical" flexItem/>
                                                <Stack alignItems="center" spacing={2}>
                                        <span className="subHeaders white-90">
                                            Баланс
                                        </span>
                                                    <span className="subHeaders yellow">
                                            {item.stats?.balance?.value}
                                        </span>
                                                </Stack>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            )
                        }

                        {
                            (accountsData?.meta?.pagination?.total_pages > 1) &&
                            <Pagination
                                page={accountsPage}
                                onChange={handleChangeProductsPage}
                                color="primary"
                                count={accountsData?.meta?.pagination?.total_pages}
                                variant="outlined"
                                shape="rounded"
                                sx={{mr: 'auto'}}
                            />
                        }
                        <Button
                            onClick={() => {
                                setForexAccountData({id: 0, login: ''})
                            }}
                            fullWidth
                            variant={forexAccountData.id === 0 ? "contained" : "outlined"}
                            color={forexAccountData.id === 0 ? "success" : "neutral"}
                            sx={{height: 68}}>
                            Без счета
                        </Button>
                        <Stack direction="row" spacing={7} justifyContent="flex-end">
                            <Button onClick={handlerClose} color="error">Отмена</Button>
                            <Button onClick={handleUpdate} color="success">Сохранить</Button>
                        </Stack>

                    </Stack>
                </Box>
            </Modal>
            <SimpleModal maxWidth={620} title="Отвязать продукт" openModal={openUpdateModal}
                         closeModal={setOpenUpdateModal}>
                    <span className="h2">
                        Данный счет привязан к продукту <span className="blue">{forexProductTitle}</span>.
                        Хотите отвязать этот продукт и привязать к новому?
                    </span>
                <Stack direction="row" justifyContent="flex-end" spacing={7}>
                    <Button onClick={() => setOpenUpdateModal(false)} color="error">Отмена</Button>
                    <Button
                        onClick={handleUpdateAccount}
                        color="success">Подтвердить</Button>
                </Stack>
            </SimpleModal>
        </>
    );
}

export default SettingProductModal;