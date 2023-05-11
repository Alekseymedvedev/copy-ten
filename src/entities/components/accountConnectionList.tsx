import React, {FC, useState} from 'react';
import {Chip, Divider, Grid, Pagination, Skeleton, Stack, useMediaQuery} from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {useGetAllAddValidateProductsQuery, useUpdateProductMutation} from "../../store/API/productApi";
import SimpleModal from "./modal/simpleModal";

interface IType {
    setForexAccountData?: any
}

const AccountConnectionList: FC<IType> = ({setForexAccountData}) => {
    const mediaQuery = useMediaQuery('(min-width:980px)');
    const [productsPage, setProductsPPage] = useState(1);
    const [forexAccountId, setForexAccountId] = useState(0);
    const [forexProductTitle, setForexProductTitle] = useState('');
    const [forexProductId, setForexProductId] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const [updateAccount, {isLoading, error}] = useUpdateProductMutation()
    const {
        data: accountsData,
        error: accountsError,
        isLoading: accountsLoading
    } = useGetAllAddValidateProductsQuery(productsPage)

    const handleChangeProductsPage = (event: React.ChangeEvent<unknown>, value: number) => {
        setProductsPPage(value);
    };

    const handleChangeAccount = (productData: any, id: number, login: string) => {
        if (productData) setOpenModal(true)

        setForexProductTitle(productData?.title)
        setForexProductId(productData?.id)
        setForexAccountId(id)
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
            if (!error && !isLoading) {
                setOpenModal(false)
            }
        })
    };
    if (accountsLoading) {
        return (
            <Skeleton variant="rounded" width={`100%`} height={64}/>
        )
    }
    return (
        <Stack spacing={7}>
            <Stack className="h2 white-100">Выберите счет для продукта</Stack>
            {
                accountsData && accountsData.data.map((item: any) =>
                    <Paper
                        key={item.id}
                        onClick={() => {
                            handleChangeAccount(item.product?.product_data, item.id, item.login)
                        }}
                        sx={{
                            borderColor: forexAccountId === item.id ? '#6FCF97' : '',
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
                                            color={forexAccountId === item.id ? "success" : "neutral"}
                                            label={forexAccountId === item.id ? "Выбрано" : "Свободен для привязки"}
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
                    page={productsPage}
                    onChange={handleChangeProductsPage}
                    color="primary"
                    count={accountsData?.meta?.pagination?.total_pages}
                    variant="outlined"
                    shape="rounded"
                    sx={{mr: 'auto'}}
                />
            }
            <SimpleModal maxWidth={620} title="Отвязать продукт" openModal={openModal}
                         closeModal={setOpenModal}>
                    <span className="h2">
                        Данный счет привязан к продукту <span className="blue">{forexProductTitle}</span>.
                        Хотите отвязать этот продукт и привязать к новому?
                    </span>
                <Stack direction="row" justifyContent="flex-end" spacing={7}>
                    <Button onClick={() => setOpenModal(false)} color="error">Отмена</Button>
                    <Button
                        onClick={handleUpdateAccount}
                        color="success">Подтвердить</Button>
                </Stack>
            </SimpleModal>
        </Stack>
    );
};

export default AccountConnectionList;