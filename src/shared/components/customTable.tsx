import React, {FC} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


interface T {
    data?: any;
    dataTableHead?: string[]
}

const CustomTable: FC<T> = ({data, dataTableHead}) => {
    return (
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
                    {data?.map((item: any) => (
                        <TableRow key={item.trader.name + item.open_at + item.profit}>

                            <TableCell>{item.open_at}</TableCell>
                            <TableCell>
                                {item.trader.name}
                                {item.set.name && <span className="green"> (Сет {item.set.name})</span>}
                            </TableCell>
                            <TableCell className={item.type === 'sell' ? 'red' : 'green'}>
                                {item.type === 'sell' ? 'Продажа' : 'Покупка'}
                            </TableCell>
                            <TableCell>
                                <span className="yellow">{item.volume}</span>
                            </TableCell>
                            <TableCell sx={{color: '#fff'}}>{item.symbol ? item?.symbol : '-'}</TableCell>
                            <TableCell sx={{color: '#fff'}}>{item.open_price}</TableCell>
                            <TableCell>{item.close_at}</TableCell>
                            <TableCell sx={{color: '#fff'}}>{item.close_price}</TableCell>
                            <TableCell
                                className={item.commission > 0 ? 'green' : 'red'}>{item.commission ? item.commission : '-'}</TableCell>
                            <TableCell
                                className={item.swap > 0 ? 'green' : 'red'}>{item.swap ? item.swap : '-'}</TableCell>
                            <TableCell className={item.profit > 0 ? 'green' : 'red'}>
                                {item.profit > 0 ? '+' : '-'}{item.profit}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        // <StyledTableContainer >
        //     <Table sx={{minWidth: 650}} aria-label="a dense table">
        //         <TableHead>
        //             <StyledTableRow>
        //                 <StyledTableCell align="center">Год</StyledTableCell>
        //                 <StyledTableCell align="center">Янв</StyledTableCell>
        //                 <StyledTableCell align="center">Янв</StyledTableCell>
        //                 <StyledTableCell align="center">Янв</StyledTableCell>
        //                 <StyledTableCell align="center">Янв</StyledTableCell>
        //                 <StyledTableCell align="center">Янв</StyledTableCell>
        //                 <StyledTableCell align="center">Янв</StyledTableCell>
        //                 <StyledTableCell align="center">Янв</StyledTableCell>
        //             </StyledTableRow>
        //         </TableHead>
        //         <TableBody>
        //             {rows.map((row) => (
        //                 <StyledTableRow key={row.name}>
        //                     <StyledTableCell component="th" scope="row">
        //                         {row.name}
        //                     </StyledTableCell>
        //                     <StyledTableCell className={row.calories < 0 ? 'red' : 'green'}
        //                                      align="center">{row.calories}</StyledTableCell>
        //                     <StyledTableCell className={row.calories < 0 ? 'red' : 'green'} scope="row"
        //                                      align="center">{row.fat}</StyledTableCell>
        //                     <StyledTableCell className={row.calories < 0 ? 'red' : 'green'}
        //                                      align="center">{row.carbs}</StyledTableCell>
        //                     <StyledTableCell className={row.calories < 0 ? 'red' : 'green'}
        //                                      align="center">{row.protein}</StyledTableCell>
        //                     <StyledTableCell className={row.calories < 0 ? 'red' : 'green'}
        //                                      align="center">{row.protein1}</StyledTableCell>
        //                     <StyledTableCell className={row.calories < 0 ? 'red' : 'green'}
        //                                      align="center">{row.protein2}</StyledTableCell>
        //                     <StyledTableCell className={row.calories < 0 ? 'red' : 'green'}
        //                                      align="center">{row.protein3}</StyledTableCell>
        //                 </StyledTableRow>
        //             ))}
        //         </TableBody>
        //     </Table>
        // </StyledTableContainer>
    );
};

export default CustomTable;