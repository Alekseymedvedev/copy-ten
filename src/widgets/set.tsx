import React, {FC,  useState} from 'react';
import BalanceChart from "./balanceChart";
import Chart from "../entities/components/chart/chart";
import {
    Divider,
    Grid,
    Stack,
    TextField,
    useMediaQuery
} from "@mui/material";
import Button from "@mui/material/Button";
import SimpleModal from "../entities/components/modal/simpleModal";
import IconTraders from "../shared/assets/images/icons/iconTraders";
import IconSet from "../shared/assets/images/icons/iconSet";
import Paper from "@mui/material/Paper";
import { useDeleteSetMutation, useUpdateSetMutation,} from "../store/API/tradeSetsApi";
import LinkedTrader from "../entities/components/modal/linkedTrader";


interface IType {
    data?: any;
}

const Set: FC<IType> = ({ data}) => {
    const [deleteSet] = useDeleteSetMutation()
    const [updateSet] = useUpdateSetMutation()

    const mediaQuery = useMediaQuery('(min-width:980px)');

    const [openModalSetSettings, setOpenModalSetSettings] = useState(false);

    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const [textValue, setTextValue] = useState(data?.description);
    const [nameAccount, setNameAccount] = useState(data?.name);

    const closeModal = () => {
        setTextValue('')
        setNameAccount('')
        setOpenModalSetSettings(false)
    }
    const handleUpdateSet = () => {
        updateSet({
            id: data.id,
            body: {
                name: nameAccount,
                description: textValue,
            }
        }).then(() => {
            closeModal()
        })
    }
    return (
        <>
            <Paper>
                <Stack direction="row" spacing={7} alignItems="center" sx={{mb: 7}}>
                    <IconSet/>
                    <span className="h2 white-90">Сет {data?.name}</span>
                </Stack>
                <Divider variant="fullWidth" sx={{mb: 7, width: `103%`}}/>
                <Grid
                    direction={!mediaQuery ? "column-reverse" : "row"}
                    container
                    spacing={10}
                    columns={12}
                    wrap="wrap"
                    sx={{mb: 7}}
                >
                    <Grid item xs={12} md={5}>
                        <Chart
                            title="Доходность"
                        >
                            <BalanceChart data={data?.graph}/>
                        </Chart>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Stack className="subHeaders white-80" spacing={7}>
                            <p>
                                {data?.description}
                            </p>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container spacing={10} columns={12} wrap="wrap" alignItems="stretch">
                    <Grid item xs={16} md={5}>
                        <Stack direction="row" spacing={7}>
                            <Button
                                onClick={() =>  setOpenModalDelete(true)}
                                variant="contained"
                                color="error"
                                sx={{minWidth: 81, height: 48}}
                            >Удалить</Button>
                            <Button
                                onClick={() => setOpenModalSetSettings(true)}
                                fullWidth
                                color="neutral"
                                sx={{height: 48}}
                            >Настройки</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={16} md={7}>
                        <Button fullWidth color="neutral" startIcon={<IconTraders/>} sx={{height: 48}}
                                onClick={() => setOpenModal(true)}>
                            Подключенные трейдеры
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            {
                openModalSetSettings &&
                <SimpleModal title="Настройки" openModal={openModalSetSettings}
                             closeModal={setOpenModalSetSettings}>
                    <Stack spacing={7}>
                        <TextField
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={nameAccount}
                            onChange={(e) => setNameAccount(e.target.value)}
                            label="Название сета"
                            type="text"
                        />
                        <TextField
                            value={textValue}
                            multiline
                            minRows={10}
                            onChange={(e) => setTextValue(e.target.value)}
                        />
                        <Stack direction="row" justifyContent="flex-end" spacing={7}>
                            <Button onClick={closeModal} color="error">Отмена</Button>
                            <Button
                                onClick={handleUpdateSet}
                                color="success">Сохранить настройки</Button>
                        </Stack>
                    </Stack>
                </SimpleModal>
            }

            {
                openModal &&
                <LinkedTrader title="Подключенные трейдеры" openModal={openModal} id={data?.id}
                             closeModal={setOpenModal}/>
            }

            {
                openModalDelete &&
                <SimpleModal maxWidth={620} title="Подтверждение" openModal={openModalDelete}
                             closeModal={setOpenModalDelete}>
                    <span className="h2" >
                        Удалить <span className="blue">Сет {data?.name}</span>?
                    </span>
                    <Stack direction="row" justifyContent="flex-end" spacing={7}>
                        <Button onClick={() => setOpenModalDelete(false)} color="error">Отмена</Button>
                        <Button
                            onClick={() => deleteSet(data.id)}
                            color="success">Подтвердить</Button>
                    </Stack>
                </SimpleModal>
            }
        </>
    );
};

export default Set;