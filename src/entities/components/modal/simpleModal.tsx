import React, {FC, useEffect, useState} from 'react';
import {Box, Button, Divider, Modal, Snackbar, Stack} from "@mui/material";
import IconClose from "../../../shared/assets/images/icons/iconClose";


interface IType {
    children?: any;
    title: string;
    closeModal: any;
    openModal: boolean;
}

const SimpleModal: FC<IType> = ({children,title,openModal, closeModal}) => {
    const [open, setOpen] = useState(false);

    useEffect((() => {
        setOpen(openModal)
    }), [open, openModal])
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        closeModal(false)
        setOpen(false);
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box>
                    <Stack onClick={handleClose} sx={{position: "absolute", top: 14, right: 28, cursor: "pointer"}}>
                        <IconClose/>
                    </Stack>
                    <Stack className="h2 white-90" sx={{mb: 7}}>{title}</Stack>
                    <Divider variant="fullWidth" sx={{mb: 7}}/>
                    {children}
                </Box>
            </Modal>
        </>
    );
};

export default SimpleModal;