import { VFC, memo, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useHome } from "../../hooks/useHome"
import { Heading } from "@chakra-ui/react"


import { HeaderLayout } from "../templete/HeaderLayout"
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";

export const Home: VFC = memo(() => {


    const { home } = useHome();
    const navigate = useNavigate();

    useEffect(() => {
        home(navigate);
    }, [])

    const onCLickDate = (arg: DateClickArg) => { // bind with an arrow function
        // alert(arg.dateStr)
        navigate("/home/balance-of-payment-list",{state: {date1: arg.dateStr as string}, replace: false })
    }

    return (
        <>
            <HeaderLayout />
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">貯金額:1,500,000円</Heading>
            <FullCalendar plugins={[dayGridPlugin, interactionPlugin]}
                dateClick={onCLickDate}
                initialView="dayGridMonth" />
            <Outlet />
        </>
    )
})