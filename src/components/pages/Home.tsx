import { VFC, memo, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useHome } from "../../hooks/useHome"
import { Heading, Stack } from "@chakra-ui/react"


import { RegistFormTab } from "../organisms/layout/RegistFormTab"
import { Header } from "../organisms/layout/Header"

export const Home: VFC = memo(() => {

    const { usableAmount, init, saveAction, balanceAmount, restUsableAmount } = useHome();

    useEffect(() => {
        init();
    }, [init])

    return (
        <>
            <Header />
            <Heading as="h1" fontSize={{ base: "xs", md: "sm" }} textAlign="center">1日に使える金額:{usableAmount.toLocaleString()}円</Heading>
            <Heading as="h1" fontSize={{ base: "xs", md: "sm" }} textAlign="center">本日の収支金額:{balanceAmount.toLocaleString()}円</Heading>
            <Heading as="h1" fontSize={{ base: "xs", md: "sm" }} textAlign="center">残り使える金額:{restUsableAmount.toLocaleString()}円</Heading>
            <Stack spacing={4} px={4} py={5}>
                <RegistFormTab saveAction={saveAction} headerWord={""} index={0} fixFlg={"0"} />
            </Stack>
            <Outlet />

        </>
    )
})