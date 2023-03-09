import React, {FC, useState} from 'react';
import {Button, Stack, useMediaQuery} from "@mui/material";
import Paper from "@mui/material/Paper";
import TransactionModal from "./modal/transactionModal";

interface IType {
    children?: any
}

const PartnerBalance: FC<IType> = ({children}) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (event: React.SyntheticEvent) => {
        event.stopPropagation()
        setOpenModal(true)
    };
    return (
        <>
            <Paper>
                <Stack direction={mediaQuery ? "row" : "column"} alignItems={mediaQuery ? "center" : "flex-start"} justifyContent="space-between"
                       spacing={4}>
                    <Stack>
                        <span className="h2 white-90">Баланс партнерского счета</span>
                        <span className="h1">$102.837</span>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={4}>
                        <Button variant="outlined" color="neutral">История начислений</Button>
                        <Button onClick={handleOpenModal} variant="outlined" color="warning">Вывод</Button>
                    </Stack>
                </Stack>
            </Paper>
            <TransactionModal openModal={openModal} closeModal={setOpenModal}/>
        </>

    );
};

export default PartnerBalance;