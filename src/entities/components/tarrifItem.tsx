import React, {FC} from 'react';
import Paper from "@mui/material/Paper";
import {Chip, Stack, useMediaQuery} from "@mui/material";
import {useGetAllProductsQuery} from "../../store/API/productApi";
import imgCopy from "../../shared/assets/images/tariff-copy.svg";
import imgRobot from "../../shared/assets/images/tariff-robot.svg";


interface IType {
    children?: any
}

const state = [
    {
        id: 1,
        name: 'Копировальщик',
        priceTitle: 'До 10.000$',
        image: imgCopy,
        price: '$1000',
        sale: {
            isSale: false,
            priceSale: '',
            text: ''
        }
    },
    {
        id: 1,
        name: 'Копировальщик',
        priceTitle: 'До 20.000$',
        image: imgCopy,
        price: '$2000',
        sale: {
            isSale: false,
            priceSale: '',
            text: ''
        }
    },
    {
        id: 3,
        name: 'Робот',
        priceTitle: 'До 50.000$',
        image: imgRobot,
        price: '$5000',
        sale: {
            isSale: true,
            priceSale: '$10 000',
            text: 'Скидка'
        }
    },
]
const TarrifItem: FC<IType> = ({children}) => {

    const mediaQuery = useMediaQuery('(min-width:900px)');
    return (
        <Stack direction="row" spacing={7} justifyContent="space-between">
            {
                state.map(item =>
                    <Paper key={item.id} sx={{
                        background:
                            item.id === 3 ?
                                `linear-gradient(180deg, #33223A 0%, rgba(51, 34, 58, 0) 93.75%)`
                                : `linear-gradient(180deg, #242D28 0%, rgba(36, 45, 40, 0) 93.75%)`
                    }}>
                        <Stack spacing={4}>
                            <span className={item.id === 3 ?"h1 pink" : "h1 green"}>{item.name}</span>
                            <span className="h2">{item.priceTitle}</span>
                            <p className="subHeaders white-90">
                                Velit nunc ultrices sit est et varius. Tellus accumsan pretium sollicitudin elit purus
                                morbi.
                                Euismod fames ullamcorper eget eget mi nisi aliquet tortor. Etiam aenean mauris integer
                                maecenas et
                                in. Volutpat dolor id vulputate non sed arcu. Justo ut nisl tincidun
                            </p>
                            <Stack alignItems="center">
                                <img src={item.image} alt="Копировальщик"/>
                            </Stack>
                            <Chip label={item.sale.isSale ? item.price + ' ' + item.sale.priceSale : item.price}
                                  color="warning" variant="outlined" sx={{
                                position: 'absolute',
                                bottom: 14,
                                left: 14,
                            }}/>
                            {
                                item.sale.isSale &&
                                <Chip label={item.sale.text} color="error" variant="outlined" sx={{
                                    position: 'absolute',
                                    bottom: 14,
                                    right: 14,
                                }}/>
                            }
                        </Stack>
                    </Paper>
                )
            }
        </Stack>
    );
};

export default TarrifItem;