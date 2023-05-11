import React, {FC, useState} from 'react';
import {Chip, Pagination, Skeleton, Stack, useMediaQuery} from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {useGetAllAddValidateProductsQuery} from "../../store/API/productApi";

interface IType {
    setForexAccountData?: any
}

const AccountConnectionList: FC<IType> = ({setForexAccountData}) => {
    const [productsPage, setProductsPPage] = useState(1);
    const [forexAccountId, setForexAccountId] = useState(0);
    const mediaQuery = useMediaQuery('(min-width:980px)');
    const {
        data: accountsData,
        error: accountsError,
        isLoading: accountsLoading
    } = useGetAllAddValidateProductsQuery(productsPage)

    const handleChangeProductsPPage = (event: React.ChangeEvent<unknown>, value: number) => {
        setProductsPPage(value);
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
                            setForexAccountId(item.id)
                            setForexAccountData({
                                id: item.id,
                                login: item.login ? item.login : ''
                            })
                        }}
                        sx={{
                            borderColor: forexAccountId === item.id ? '#6FCF97' : '',
                            cursor: 'pointer'
                        }}
                    >
                        <Stack direction={mediaQuery ? "row" : "column"}
                               justifyContent="space-between"
                               spacing={7}>
                            <Stack direction="row" justifyContent="space-between" spacing={7}>
                                <Stack alignItems="center" spacing={2}>
                                                            <span className="subHeaders white-90">
                                                                {item.login}
                                                            </span>
                                    <span className="subHeadersBold">
                                                                {item.name ? item.name : '---'}
                                                            </span>
                                </Stack>
                                {
                                    item.product?.assigned ?
                                        //   <Chip color="info" variant="filled" label={`Подключено к ${item.product?.product_data?.title}`} />
                                      <Button variant="contained" color="info">Подключено к {item.product?.product_data?.title}</Button>
                                        : <Button color="neutral">Подключить</Button>
                                }
                            </Stack>
                            <Stack direction="row" justifyContent="space-between" spacing={7}>
                                {
                                    item?.server.type === 0 ?
                                        <Chip label="Центовый" variant="filled" color="neutral"
                                              sx={{pr: 0, pl: 0}}/>
                                        :
                                        <Chip label="Долларовый" variant="filled" color="warning"
                                              sx={{pr: 0, pl: 0}}/>
                                }
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
                                <Stack alignItems="center" spacing={2}>

                                                            <span className="subHeaders white-90">
                                                                Баланс
                                                            </span>
                                    <span className="subHeaders yellow">
                                                                {item.stats?.balance?.value}
                                                            </span>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Paper>
                )
            }
            {
                (accountsData?.meta?.pagination?.total_pages > 1) &&
                <Pagination
                    page={productsPage}
                    onChange={handleChangeProductsPPage}
                    color="primary"
                    count={accountsData?.meta?.pagination?.total_pages}
                    variant="outlined"
                    shape="rounded"
                    sx={{mr: 'auto'}}
                />
            }
        </Stack>
    );
};

export default AccountConnectionList;