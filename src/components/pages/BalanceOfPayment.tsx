import {  Stack, useDisclosure } from "@chakra-ui/react"
import { memo, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useBalanceList } from "../../hooks/useBalanceList"
import { BalanceTableTab } from "../organisms/layout/BalanceTableTab"
import { Header } from "../organisms/layout/Header"
import { EditModal } from "./modals/EditModal"

interface State {
    date: string;
  }
  
export const BalanceOfPayment = memo(() => {

    const location = useLocation();

    const { date }  = location.state as State;
    const slashDate = date.replace("-","/").replace("-","/");
    // const dateYyyyMm = date.replace("-","").replace("-","");

    

    const requestJson = JSON.stringify({'date': slashDate})
    // const { findBalanceList ,incomeList ,expenditureList} = useBalanceList();

    

    return (
        <>
            <Header />
            <Stack spacing={4} px={4} py={5}>
                <BalanceTableTab requestJson={requestJson}/>
            </Stack>
            
        </>
    )
})