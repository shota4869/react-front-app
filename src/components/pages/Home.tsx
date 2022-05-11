import { VFC, memo, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useHome } from "../../hooks/useHome"
import { Box, Flex, Heading } from "@chakra-ui/react"


import { HeaderLayout } from "../templete/HeaderLayout"
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { DonutsChart } from "../atoms/graphs/DonutsChart"

export const Home: VFC = memo(() => {


    const { home } = useHome();
    const navigate = useNavigate();

    useEffect(() => {
        home(navigate);
    }, [])

    const onCLickDate = (arg: DateClickArg) => { // bind with an arrow function
        alert(arg.dateStr)
    }

    return (
        <>
            <HeaderLayout />
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>貯金額：{ }円</Heading>
            <Flex height="50">
                <Box pr={8}>本日の収支:{ }円</Box>
                <Box pr={8}>収入:{ }円</Box>
                <Box pr={8}>支出:{ }円</Box>
            </Flex>
            <FullCalendar plugins={[dayGridPlugin, interactionPlugin]}
                dateClick={onCLickDate}
                initialView="dayGridMonth" />
            <Outlet />
        </>
    )
})