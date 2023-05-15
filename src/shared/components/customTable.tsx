import React, {FC} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Pagination} from "@mui/material";


interface T {
    data?: any;
    dataTableHead?: string[];
    isTrader:any;
    changePage?:any;
    page?:any;
}

const CustomTable: FC<T> = ({data, dataTableHead,isTrader,changePage,page}) => {
    return (
        <>

        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            dataTableHead &&
                            dataTableHead.map((item: any,index:any) =>
                                <TableCell key={item+index}>{item}</TableCell>
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.data?.map((item: any) => (
                        <TableRow key={item?.trader?.name + item.open_at + item.profit}>

                            <TableCell>{item.open_at}</TableCell>
                            {!isTrader &&
                                <TableCell>
                                    {item.trader?.name}
                                    {item?.set?.name && <span className="green"> (Сет {item?.set?.name})</span>}
                                </TableCell>
                            }

                            <TableCell className={item?.type === 'sell' ? 'red' : 'green'}>
                                {item?.type === 'sell' ? 'Продажа' : 'Покупка'}
                            </TableCell>
                            <TableCell>
                                <span className="yellow">{item?.volume}</span>
                            </TableCell>
                            <TableCell sx={{color: '#fff'}}>{item?.symbol ? item?.symbol : '-'}</TableCell>
                            <TableCell sx={{color: '#fff'}}>{item?.open_price}</TableCell>
                            <TableCell>{item?.close_at}</TableCell>
                            <TableCell sx={{color: '#fff'}}>{item.close_price}</TableCell>
                            <TableCell
                                className={item?.commission > 0 ? 'green' : 'red'}>{item?.commission ? item?.commission : '-'}</TableCell>
                            <TableCell
                                className={item?.swap > 0 ? 'green' : item?.swap < 0 ? 'red' :''}>{item?.swap ? item?.swap : '-'}</TableCell>
                            <TableCell className={item?.profit > 0 ? 'green' : 'red'}>
                                {item.profit > 0 ? '+' : '-'}{item?.profit}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

            {
                data?.meta?.pagination?.total_pages > 1 &&
            <Pagination
                page={page}
                onChange={changePage}
                color="primary"
                count={data?.meta?.pagination?.total_pages}
                variant="outlined"
                shape="rounded"
                sx={{mr: 'auto',mt:7}}
            />

        }
            </>
    );
};

export default CustomTable;