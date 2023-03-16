import React, {FC} from 'react';
import { Stack} from "@mui/material";

interface T {
    title?: string;
    value?: string | number;
    colorText?: string;
    colorBg?: string;
}

const data = [
    {
        title: 'Всего сделок',
        value: '2104',
        colorText: 'white-100',
        colorBg: '',
    },
    {
        title: 'Доходных сделки',
        value: '1998',
        colorText: 'green',
        colorBg: 'greenBg',
    },
    {
        title: 'Убыточные сделки',
        value: '106',
        colorText: 'red',
        colorBg: 'redBg',
    },
    {
        title: 'За текущий месяц',
        value: '+12.38%',
        colorText: 'blue',
        colorBg: 'blueBg',
    },

]
const TransactionsLabel: FC<T> = ({title, value, colorText, colorBg}) => {
    return (
        <>
            <Stack direction="row" flexWrap="wrap" gap={7} justifyContent="space-between">
                {
                    data && data.map((item) => (
                            <Stack
                                key={item.title}
                                className={item.colorBg}
                                sx={{
                                    height: 140,
                                    width: 140,
                                    padding: 7,
                                    border: `0.5px solid #3C3C3C`,
                                    borderRadius: 2,
                                }}
                                justifyContent="space-between"
                            >
                                <span className="h2 white-90">{item.title}</span>
                                <span className={item.colorText}>{item.value}</span>
                            </Stack>
                    ))
                }
            </Stack>

        </>
    );
};

export default TransactionsLabel;