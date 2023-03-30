import React, {FC, useEffect, useState} from 'react';
import {useGetPaymentLinkQuery} from "../../../store/API/productApi";
import {Box, Divider, Modal, Stack} from "@mui/material";
import IconClose from "../../../shared/assets/images/icons/iconClose";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

interface IType {
    paymentLinkId: any;
    title?: string;
    closeModal?: any;
    openModal: boolean;
}

const PaymentModal: FC<IType> = ({paymentLinkId, title, openModal, closeModal}) => {

    const [id, setId] = useState(-1);
    const {data: dataPaymentLink} = useGetPaymentLinkQuery(`/product/${id}/pay`)
    const [open, setOpen] = useState(false);

    useEffect((() => {
        console.log(paymentLinkId?.data?.id)
        setId(paymentLinkId?.data?.id)
        setOpen(openModal)
    }), [open, openModal,paymentLinkId,dataPaymentLink])

    const handleClose = (e:any) => {
        e.preventDefault()
        closeModal(false)
        setOpen(false)
    };

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{maxWidth:620}}>
                    <Stack onClick={handleClose} sx={{position: "absolute", top: 14, right: 28, cursor: "pointer"}}>
                        <IconClose/>
                    </Stack>
                    <Stack className="h2 white-90" sx={{mb: 7}}>{title}</Stack>
                    <Divider variant="fullWidth" sx={{mb: 7}}/>
                    {dataPaymentLink?.data?.payment_url}
                    <Button

                        color="success"
                        component={Link} target="_blank" to={dataPaymentLink?.data?.payment_url}
                    >Подтвердить и оплатить</Button>
                </Box>
            </Modal>
        </>
    );
};

export default PaymentModal;