import React, {FC} from 'react';
import {Container, CssBaseline, Grid, Stack} from "@mui/material";
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";


interface MainLayoutProps {
    children: any;
    isAdmin?: boolean;
    heading?: string;
    accountNumber?: string;
    typeAccount?: 'dollar' | 'cent' | 'copytrad' | 'robot'
}

const MainLayout: FC<MainLayoutProps> = ({children, isAdmin, heading, accountNumber, typeAccount}) => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={10} columns={16} wrap="wrap">
                <Grid item xs={16} md={4}>
                    <Sidebar isAdmin={isAdmin}/>
                </Grid>
                <Grid item xs={16} md={12} sx={{display: 'flex', flexDirection: 'column'}}>
                    <Header heading={heading} accountNumber={accountNumber} typeAccount={typeAccount}/>
                    <main className="main">
                        {children}
                    </main>
                    <Footer/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MainLayout;