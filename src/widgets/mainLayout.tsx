import React, {FC} from 'react';
import {Container, CssBaseline, Grid, Stack} from "@mui/material";
import Sidebar from "./sidebar";
import Header from "./header";


interface MainLayoutProps {
    children: any;

}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={10} columns={16} wrap="wrap">
                <Grid item xs={4}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={12}>
                    <Header/>
                    <main className="main">
                        {children}
                    </main>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MainLayout;