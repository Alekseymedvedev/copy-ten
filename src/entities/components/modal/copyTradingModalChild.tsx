import {Box, Button, Divider, Modal, Snackbar, Stack} from "@mui/material";
import {FC, useEffect, useState} from "react";
import * as React from "react";
import IconClose from "../../../shared/assets/images/icons/iconClose";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    widths: `100%`,
    maxWidth: 620,
    width: `100%`,
    bgcolor: '#1F1F1F',
    border: `0.5px solid #3c3c3c`,
    borderRadius: 1,
    p: 14
};

interface IType {
    children?: any;
    closeModal: any;
    openModal: boolean;
    step: number;
    setStep: (number: number) => void;
}

const CopyTradingModalChild: FC<IType> = ({children, openModal, closeModal, step, setStep,}) => {
    const [open, setOpen] = useState(false);
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small">
                UNDO
            </Button>

        </React.Fragment>
    );
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
            <Snackbar
                open={open}
                autoHideDuration={6000}
                message="Note archived"
                action={action}
            />
            <Modal
                // hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{...style}}>
                    <Stack onClick={handleClose} sx={{position: "absolute", top: 14, right: 28, cursor: "pointer"}}>
                        <IconClose/>
                    </Stack>
                    <Stack className="h2 white-90" sx={{mb: 7}}>Подключение трейдера</Stack>

                    <Divider variant="fullWidth" sx={{mb: 7}}/>
                    <div className="h2">
                        <span>Подключить трейдера</span>
                        <span className="green">&nbsp;Nickname_Nickname&nbsp;</span>
                        <span>на счет</span>
                        <span className="blue">&nbsp;Мой счет 1&nbsp;</span>
                        <span>?</span>
                    </div>
                    <Stack direction="row" justifyContent="flex-end" spacing={7} sx={{mt: 7}}>
                        <Button onClick={handleClose} color="error">Отклонить</Button>
                        <Button onClick={() => {
                            handleClose()
                            setStep(step + 1)
                        }} color="success">Продожить</Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    );
};

export default CopyTradingModalChild;