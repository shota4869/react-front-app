import { VFC, memo, useEffect } from "react"
import { Stack } from "@chakra-ui/react"
import { HeaderLayout } from "../templete/HeaderLayout"
import {  useNavigate } from "react-router-dom";

import { Calender } from "../atoms/graphs/Calender"
import { useCalenderPage } from "../../hooks/useCalenderPage";
import { Header } from "../organisms/layout/Header";


export const CalenderPage: VFC = memo(() => {

    const { calender } = useCalenderPage();
    const navigate = useNavigate();

    useEffect(() => {
        calender(navigate);
    }, [])

    return (
        <>
            <Header />
            <Stack spacing={4} px={4} py={5}>
                <Calender />
            </Stack>
        </>
    )
})