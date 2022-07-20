import {  Stack ,Heading} from "@chakra-ui/react"
import { memo } from "react"
import { useLocation } from "react-router-dom"
import { BalanceTableTab } from "../organisms/layout/BalanceTableTab"
import { Header } from "../organisms/layout/Header"

interface State {
    date: string,
    month: string,
    monthFlg: String
  }
  
export const BalanceOfPayment = memo(() => {

    const location = useLocation();

    const { date, month ,monthFlg}  = location.state as State;
    const slashDate = date.replace("-","/").replace("-","/");

    const requestJson = JSON.stringify({'date': slashDate, 'month': month,'monthFlg': monthFlg})

    return (
        <>
            <Header />
            <Heading as="h1" fontSize={{ base: "sm", md: "md" }} textAlign="center">{monthFlg === "0" ? slashDate :month}</Heading>
            <Stack spacing={4} px={4} py={5}>
                <BalanceTableTab requestJson={requestJson}/>
            </Stack>
            
        </>
    )
})