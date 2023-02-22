import MainLayout from "../widgets/mainLayout";
import CustomTabs from "../widgets/customTabs";
import {Grid} from "@mui/material";
import {NavLink} from "react-router-dom";
import AccountCard from "../entities/components/accountCard";
import React from "react";
import TradersAndSets from "../widgets/tradersAndSets";


const ExchangeAccount = () => {

    return (
        <MainLayout>
            <CustomTabs tabsName={['Дашборд','История']}/>
        </MainLayout>
    );
};

export default ExchangeAccount;