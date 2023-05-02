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

const DashboardTable: FC<T> = ({data, dataTableHead}) => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            dataTableHead &&
                            dataTableHead.map((item: any,index:any) =>
                                <TableCell key={item+index} sx={{color:'#BDBDBD'}}>{item}</TableCell>
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((item: any) => (
                        <TableRow key={item.year}>

                            <TableCell sx={{color:"#fff"}}>{item.year}</TableCell>
                            {
                                item.data?.map((item:any,index:any)=>
                                    <TableCell key={index} className={item > 0 ? 'green': item<0 ?'red' : '' }>
                                        {item ? item : '-'}
                                    </TableCell>
                                )
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
};

export default DashboardTable;