import React, {FC, useState} from 'react';
import Paper from "@mui/material/Paper";
import {Avatar, Divider, Stack, useMediaQuery} from "@mui/material";
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import IconProduct from "../../shared/assets/images/icons/iconProduct";
import {IProducts} from "../../types";
import SettingProductModal from "./modal/settingProductModal";
import PaymentModal from "./modal/paymentModal";


const MyProductItem: FC<IProducts> = ({id, status, valid_to, sub_title, accountData, slug}) => {
    const mediaQuery = useMediaQuery('(min-width:980px)');
    const [openModal, setOpenModal] = useState(false);
    const [openPaymentModal, setOpenPaymentModal] = useState(false)

    return (
        <Paper>
            <Stack
                direction={mediaQuery ? "row" : "column"}
                alignItems={mediaQuery ? "center" : "flex-start"}
                justifyContent="space-between"
                spacing={7}
            >
                <Stack direction="row" alignItems="center"  spacing={7} flexGrow={1}sx={{ maxWidth: 260,width: `100%`}}>
                    <IconProduct status={status}/>
                    <Stack>
                        {
                            accountData &&
                            <Stack
                                sx={{
                                    maxWidth: 130,
                                    display: 'block',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                }}>
                                <NavLink className="link" to={`/exchange-account/${accountData?.id}`}>
                                    Счет&nbsp;{accountData?.name ?? accountData?.login}
                                </NavLink>
                            </Stack>
                        }
                        <span className="subHeadersBold green">{sub_title}</span>
                    </Stack>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={7} justifyContent="center" sx={{width:`100%`}}>
                    <Stack
                        alignItems="center"
                        spacing={2}
                        flexGrow={1}
                        sx={{ maxWidth: 150,width: `100%`}}
                    >
                        <span className="subHeaders white-90">Статус</span>
                        <span className="subHeadersBold green">
                            {
                                status === 0 ? <span className="subHeadersBold red">Не активен</span> :
                                    status === 1 ? <span className="subHeadersBold green">Активен</span> :
                                        status === 2 ? <span className="subHeadersBold orange">Требуется продление</span>
                                            : <span className="subHeadersBold white-100">Не привязан</span>
                            }
                        </span>
                    </Stack>
                    <Divider orientation="vertical" flexItem/>
                    <Stack
                        alignItems="center"
                        spacing={2}
                        flexGrow={1}
                        sx={{ maxWidth: 130,width: `100%`}}
                    >
                        <span className="subHeaders white-90">Дата валидности</span>
                        <span className="subHeadersBold">{valid_to ? valid_to : '---'}</span>
                    </Stack>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={7} justifyContent="flex-end" flexGrow={1}>
                    <Button onClick={() => setOpenPaymentModal(true)} color="neutral">Продлить</Button>
                    <Button onClick={() => setOpenModal(true)} color="neutral">Настройки</Button>
                </Stack>
            </Stack>
            {
                openModal && <SettingProductModal productId={id} openModal={openModal} closeModal={setOpenModal}/>
            }
            {
                openPaymentModal &&
                <PaymentModal title="Продление продукта" text="Вы хотите продлить продукт" paymentLinkId={id} openModal={openPaymentModal}
                              closeModal={setOpenPaymentModal}/>
            }
        </Paper>
    );
};

export default MyProductItem;