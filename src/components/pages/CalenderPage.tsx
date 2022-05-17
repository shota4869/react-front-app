import { VFC, memo, useState, useEffect } from "react"
import { Stack, useDisclosure } from "@chakra-ui/react"
import { HeaderLayout } from "../templete/HeaderLayout"
import { useLocation } from "react-router-dom";
import { DonutsChart } from "../atoms/graphs/DonutsChart";
import { RegistModal } from "./modals/RegistModal";

import { BalanceTableTab } from '../organisms/layout/BalanceTableTab'
import { Calender } from "../atoms/graphs/Calender"


type State = {
    date1: string,
    yearMonth1: string
}


export const CalenderPage: VFC = memo(() => {




    const location = useLocation()
    const [yearMonth, setYearMonth] = useState('');
    const [date, setDate] = useState("");
    const [date1, setDate1] = useState<State>(location.state as State);

    const { isOpen, onOpen, onClose } = useDisclosure()

    const onOpenModal = () => {
        onOpen();
    }


    useEffect(() => {
        if (date1) {
            if (date1.date1) {
                setDate(date1.date1)
                console.log(date1.date1)
            }
            if (date1.yearMonth1) {
                setYearMonth(date1.yearMonth1);
            }
        }
    }, [])



    return (
        <>
            <HeaderLayout />
            <Stack spacing={4} px={4} py={5}>
                <Calender />
            </Stack>
        </>
    )
})