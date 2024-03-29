import React, {FC, useEffect, useState} from 'react';
import {Container, Grid} from "@mui/material";
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";
import {useGetProfileQuery} from "../store/API/profileApi";
import {useNavigate} from "react-router-dom";


interface MainLayoutProps {
    children: any;
    isLink?: any;
    isAdmin?: boolean;
    isSelect?: boolean;
    heading?: string;
    accountNumber?: string;
    typeAccount?: string
}

const MainLayout: FC<MainLayoutProps> = ({
                                             children,
                                             isLink,
                                             isSelect,
                                             isAdmin,
                                             heading,
                                             accountNumber,
                                             typeAccount
}) => {
    const {data, error} = useGetProfileQuery('')
    const [customError, setCustomError] = useState<any>({})
    const navigate = useNavigate()

    useEffect(() => {
        if (error) setCustomError({...error})
        if (customError?.status === 401) {
            localStorage.clear()
            navigate('/auth')
        }
    }, [error,customError])
    return (
        <Container maxWidth="lg">
            <Grid container spacing={10} columns={16} wrap="wrap">
                <Grid item xs={16} md={4} sx={{width:300}}>
                    <Sidebar isAdmin={isAdmin}/>
                </Grid>
                <Grid item xs={16} md={12} sx={{display: 'flex', flexDirection: 'column', height: `100vh`}}>
                    <Header isLink={isLink} heading={heading} isSelect={isSelect} accountNumber={accountNumber}
                            typeAccount={typeAccount}/>
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