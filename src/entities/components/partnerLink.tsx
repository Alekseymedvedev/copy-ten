import React, {FC} from 'react';
import Paper from "@mui/material/Paper";
import {Button, Stack} from '@mui/material';

interface IType {
    children?: any
}

const PartnerLink: FC<IType> = ({children}) => {
    return (
        <Paper>
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                <Stack spacing={4}>
                    <span className="h2 white-90">Ваша партнерская ссылка</span>
                    <a href="https://t.me/+yyCB128FQ1JmYTIy" className="link green">https://t.me/+yyCB128FQ1JmYTIy</a>
                </Stack>
                <Button variant="outlined" color="neutral">Скопировать</Button>
            </Stack>
        </Paper>
    );
};

export default PartnerLink;