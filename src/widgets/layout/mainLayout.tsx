import React, {FC} from 'react';
import {ThemeProvider} from "@mui/material/styles";
import {darkTheme} from "../../app/themeStyle/themeStyle";
import {Container, CssBaseline, Stack} from "@mui/material";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";


interface MainLayoutProps {
    children: any;

}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <Container maxWidth="lg">
            <Stack direction="row" spacing={4}>
                <Sidebar/>

                <Stack spacing={7 }>
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