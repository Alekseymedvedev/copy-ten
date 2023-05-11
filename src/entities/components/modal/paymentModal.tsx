import React, {FC, useEffect, useState} from 'react';
import {useGetPaymentLinkQuery} from "../../../store/API/productApi";
import {Box, Divider, Modal, Stack} from "@mui/material";
import IconClose from "../../../shared/assets/images/icons/iconClose";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

interface IType {
    paymentLinkId?: any;
    stateModal?: any;
    title?: string;
    closeModal?: any;
    openModal: boolean;
}

const PaymentModal: FC<IType> = ({paymentLinkId, title, openModal, closeModal, stateModal}) => {

    const {data: dataPaymentLink} = useGetPaymentLinkQuery(`/product/${paymentLinkId}/pay`)
    const [open, setOpen] = useState(false);

    useEffect((() => {
        setOpen(openModal)
    }), [open, openModal, paymentLinkId, dataPaymentLink])

    const handleClose = (e: any) => {
        e.preventDefault()
        closeModal(false)
        setOpen(false)
    };

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{maxWidth: 620}}>
                    <Stack onClick={handleClose} sx={{position: "absolute", top: 14, right: 28, cursor: "pointer"}}>
                        <IconClose/>
                    </Stack>
                    <Stack className="h2 white-90" sx={{mb: 7}}>{title}</Stack>
                    <Divider variant="fullWidth" sx={{mb: 7}}/>
                    <Stack spacing={7}>
                        {/*<Stack className="h2 white-100" spacing={14}>*/}
                        {/*    Вы хотите продлить продукт?*/}
                        {/*</Stack>*/}
                        <Stack className="h2 white-100" spacing={14}>
                            <span>
                                <span>Вы хотите подключить продукт</span>
                                <span
                                    className="yellow">&nbsp;{stateModal?.name} {stateModal?.priceTitle}&nbsp;</span>
                                <span>на счет</span>
                                <span className="blue">&nbsp;</span>
                            </span>
                            <span>
                                <span>Сумма заказа:</span>
                                <span className="green">&nbsp;{stateModal?.price}</span>
                            </span>
                        </Stack>
                        <Stack justifyContent="flex-end">
                            <Button
                                sx={{ ml:'auto', maxWidth:268}}
                                color="success"
                                component={Link} target="_blank" to={dataPaymentLink?.payment_url}
                            >Подтвердить и оплатить</Button>
                        </Stack>
                    </Stack>
                </Box>
            </Modal>
        </>
    );
};

export default PaymentModal;