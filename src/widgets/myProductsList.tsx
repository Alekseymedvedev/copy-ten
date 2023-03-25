import React, {FC} from 'react';
import MyProductItem from "../entities/components/myProductItem";
import Paper from "@mui/material/Paper";
import {Chip, Stack} from "@mui/material";
import {useGetAllProductsQuery} from "../store/API/productApi";

interface IType {
    children?: any
}

const MyProductsList: FC<IType> = ({children}) => {
    const {data, isLoading, error} = useGetAllProductsQuery('/products')
    console.log(data)
    return (
        <Paper>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{mb:7}}>
                <span className="h2 white-90">Мои продукты</span>
                <Stack direction="row" spacing={7}>
                    <Chip label="Все" color="neutral"/>
                    <Chip label="Счет 1" color="neutral"/>
                    <Chip label="Счет 2" color="neutral"/>
                </Stack>
            </Stack>
            {
                data && data.data.map(item=>
                    <MyProductItem
                        slug={item.slug}
                        sub_title={item.sub_title}
                        status={item.status}
                        valid_to={item.valid_to}
                        key={item.id}
                    />
                )
            }

        </Paper>
    );
};

export default MyProductsList;