import MainLayout from "../widgets/mainLayout";
import DashboardTabs from "../widgets/dashboardTabs";

import {useLocation} from "react-router-dom";
import {useGetTraderQuery} from "../store/API/tradersUserApi";
import {
    useGetChartBalanceGainQuery, useGetChartBalanceQuery, useGetChartDayQuery,
    useGetChartDrawdownAndGainQuery, useGetChartDrawdownQuery,
    useGetChartHoursQuery, useGetChartMonthsQuery,
    useGetChartSymbolQuery
} from "../store/API/chartApi";
import {useState} from "react";


const TraderDashboard = () => {
    const location = useLocation()
    const id = location?.pathname?.split('/').pop()

    const {data:dataTrader, isLoading:isLoadingTrader,} = useGetTraderQuery(id)

    const {data, isLoading, error} = useGetChartBalanceQuery({id:`trader/${id}`,url:'all'})
    const {data:dataBalanceGain, isLoading:isLoadingBalanceGain} = useGetChartBalanceGainQuery({id:`trader/${id}`,url:'all'})
    const {data:dataSymbol, isLoading:isLoadingSymbol} = useGetChartSymbolQuery({id:`trader/${id}`,url:'all'})
    const {data:dataChartDay, isLoading:isLoadingChartDay} = useGetChartDayQuery({id:`trader/${id}`,url:'all'})
    const {data:dataChartHours, isLoading:isLoadingChartHours} = useGetChartHoursQuery({id:`trader/${id}`,url:'all'})
    const {data:dataChartMonths, isLoading:isLoadingChartMonths} = useGetChartMonthsQuery({id:`trader/${id}`,url:'all'})
    const {data:dataChartDrawdown, isLoading:isLoadingChartDrawdown} = useGetChartDrawdownQuery({id:`trader/${id}`,url:'all'})
    const {data:dataChartDrawdownAndGain, isLoading:isLoadingChartDrawdownAndGain} = useGetChartDrawdownAndGainQuery({id:`trader/${id}`,url:'all'})


    return (
        <MainLayout>
            <DashboardTabs
                traderDashboard
                dataTrader={dataTrader?.data}
                balanceChartData={data}
                dataSymbol={dataSymbol}
                isLoadingSymbol={isLoadingSymbol}
                dataChartDay={dataChartDay}
                dataChartHours={dataChartHours}
                dataChartDrawdown={dataChartDrawdown}
                dataBalanceGain={dataBalanceGain}
                dataChartDrawdownAndGain={dataChartDrawdownAndGain}
                dataChartMonths={dataChartMonths}


            />
        </MainLayout>
    );
};

export default TraderDashboard;