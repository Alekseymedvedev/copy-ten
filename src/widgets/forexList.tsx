import React, {FC} from 'react';
import ForexItem from "../entities/components/ForexItem";
import {Skeleton, Stack, useMediaQuery} from "@mui/material";
import CustomSelect from "../shared/UI/customSelect";
import CustomInput from "../shared/UI/customInput";
import {useGetForexAccountsQuery} from "../store/API/forexAccountsApi";

interface IType {
    children?: any
}

const ForexList: FC<IType> = ({children}) => {
    const {data, isLoading, error} = useGetForexAccountsQuery('/accounts')
    const mediaQuery = useMediaQuery('(min-width:900px)');



    return (
        <Stack spacing={7}>
            <Stack direction={mediaQuery ? "row" : "column"} justifyContent="space-between" spacing={7}>
                <Stack direction={mediaQuery ? "row" : "column"} spacing={7}>
                    <CustomSelect
                        defaultValue="По дате"
                        options={[{title: 'Сначала раньше', id: 0}, {title: 'Сначала позже', id: 1}]}
                    />
                    <CustomSelect defaultValue="Подтвержденные"/>
                </Stack>
                <Stack sx={{maxWidth: mediaQuery ? 240 : null}}>
                    {/*<CustomInput search/>*/}
                </Stack>
            </Stack>
            {
                isLoading ?
                    <Skeleton variant="rectangular" width={`100%`} height={46}/>
                    : data ?
                        data?.data.map((item: any) =>
                            <ForexItem
                                key={item.id}
                                id={item.id}
                                numberAccount={item.id}
                                login={item.telegram.username}
                                passwordAccount={item.password}
                                server={item.server.title}
                                status={item.status}
                            />
                        )
                        :
                        <Stack>Ошибка при загрузке данных</Stack>
            }

        </Stack>

    );
};

export default ForexList;