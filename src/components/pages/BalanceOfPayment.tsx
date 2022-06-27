import {  Stack } from "@chakra-ui/react"
import { memo } from "react"
import { useLocation } from "react-router-dom"
import { BalanceTableTab } from "../organisms/layout/BalanceTableTab"
import { Header } from "../organisms/layout/Header"

interface State {
    date: string;
  }
  
export const BalanceOfPayment = memo(() => {

    const location = useLocation();

    const { date }  = location.state as State;
    const slashDate = date.replace("-","/").replace("-","/");
    
    const requestJson = JSON.stringify({'date': slashDate})

    return (
        <>
            <Header />
            <Stack spacing={4} px={4} py={5}>
                <BalanceTableTab requestJson={requestJson}/>
            </Stack>
            
        </>
    )
})