import React, {FC, useState} from 'react';
import {Stack, useMediaQuery} from "@mui/material";
import CustomSelect from "../shared/UI/customSelect";
import CustomInput from "../shared/UI/customInput";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {useAddServerMutation, useGetAllServersQuery} from "../store/API/serverApi";
import IconConnected from "../shared/assets/images/icons/iconConnected";
import IconPlus from "../shared/assets/images/icons/iconPlus";
import SimpleModal from "../entities/components/modal/simpleModal";
import {useInput} from "../hooks/useInput";

interface IType {
    children?: any
}

const BrokerServersList: FC<IType> = ({children}) => {
    const {data}= useGetAllServersQuery('/servers')
    const [addServer,{error: addError, isLoading}] = useAddServerMutation()
    const mediaQuery = useMediaQuery('(min-width:900px)');
    const [openModal, setOpenModal] = useState(false);
    const nameServer = useInput('')
    console.log(addError)
    console.log(isLoading)
    const handlerAdd=()=>{
        addServer({title:nameServer.value,type:0})
        setOpenModal(false)
    }
    return (
        <Stack spacing={7}>
            {/*<Stack direction={mediaQuery ? "row" : "column"} justifyContent="space-between" spacing={7}>*/}
            {/*    <Stack direction={mediaQuery ? "row" : "column"} spacing={7}>*/}
            {/*        <CustomSelect defaultValue="По дате"/>*/}
            {/*        <CustomSelect defaultValue="По сумме"/>*/}
            {/*    </Stack>*/}
            {/*    <Stack direction="row" spacing={7} sx={{maxWidth: mediaQuery ?240:null}}>*/}
            {/*        <CustomInput search/>*/}
            {/*    </Stack>*/}
            {/*</Stack>*/}
            <Button
                fullWidth
                onClick={()=>setOpenModal(true)}
                // variant="neutral"
                color="neutral"
                startIcon={<IconPlus/>}
                sx={{height:48, justifyContent: 'flex-start'}}
            >
                Добавить сервер
            </Button>
            {
                data?.data && data?.data.map(item=>
                    <Paper key={item.id}>
                        <Stack direction="row" justifyContent="space-between" spacing={7}>
                            <span>Сервер {item.title}</span>
                            <Stack direction="row" spacing={7}>
                                <Button color="neutral">Настройки</Button>
                                <Button color="error">Удалить</Button>
                            </Stack>
                        </Stack>
                    </Paper>
                )
            }
            <SimpleModal title="Добавить сервер" openModal={openModal} closeModal={setOpenModal}>
                <Stack spacing={7}>
                    <CustomInput dataInput={nameServer} label="Имя счета"/>
                </Stack>
                <Stack direction="row" justifyContent="flex-end" spacing={7} sx={{mt: 7}}>
                    <Button onClick={() => setOpenModal(false)} color="neutral">Отмена</Button>
                    <Button onClick={handlerAdd} color="success">Добавить</Button>
                </Stack>
            </SimpleModal>
        </Stack>
    );
};

export default BrokerServersList;