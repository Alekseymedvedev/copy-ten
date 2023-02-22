import React, {FC} from 'react';import {Container, CssBaseline, Stack} from "@mui/material";
import Sidebar from "./sidebar";
import Header from "./header";


interface MainLayoutProps {
    children: any;

}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <Container maxWidth="lg">
            <Stack direction="row" spacing={4}>
                <Sidebar/>

                <Stack spacing={7 } flexGrow={1}>
                    <Header/>
                    <main className="main">
                        {children}
                    </main>
                </Stack>
            </Stack>
        </Container>


    );
};

export default MainLayout;