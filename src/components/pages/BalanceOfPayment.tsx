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

    

    const requestJson = JSON.stringify({'date': slashDate})
    const { balanceList ,incomeList ,expenditureList} = useBalanceList(requestJson);

    const { isOpen, onOpen, onClose } = useDisclosure()

    const onOpenModal = () => {
        onOpen();
    }

    useEffect(() => {
        balanceList()
    },[balanceList])

    return (
        <>
            <Header />
            <Stack spacing={4} px={4} py={5}>
                <BalanceTableTab onOpen={onOpenModal} incomeList={incomeList} expenditureList={expenditureList} />
            </Stack>
            <EditModal onClose={onClose} isOpen={isOpen}/>
        </>
    )
})