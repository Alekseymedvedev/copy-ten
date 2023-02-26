import React, {FC, useState} from 'react';
import SettingsItem from "../settingsItem";
import {Button, Stack} from "@mui/material";
import CopyTradingModal from "./modal/copyTradingModal";
import SettingsModak from "./modal/settingsModak";

interface IType {
    children?: any
}

const SelfEmployment: FC<IType> = ({children}) => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (event: React.SyntheticEvent) => {
        event.stopPropagation()
        setOpenModal(true)
    };
    return (
        <SettingsItem>
            <Stack sx={{p: `14px`, border: `0.5px solid #3C3C3C`, borderRadius: 2.5}}>
                <span className="h2 blue">Почему нужна самозанятость?</span>
                <Stack sx={{mb:80}}>
                    Самоза́нятость — форма получения вознаграждения за свой труд непосредственно от заказчиков, в
                    отличие от наёмной работы. Оформите ее, чтобы не получать комиссий и других издержек альтернативных
                    способов сотрудничества
                </Stack>
                <Button onClick={(e) => handleOpenModal(e)} fullWidth variant="outlined" color="success">Внести данные</Button>
            </Stack>
            <SettingsModak openModal={openModal} closeModal={setOpenModal}/>
        </SettingsItem>
    );
};

export default SelfEmployment;