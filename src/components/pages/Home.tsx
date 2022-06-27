import { VFC, memo, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useHome } from "../../hooks/useHome"
import { Heading, Stack } from "@chakra-ui/react"


import { RegistFormTab } from "../organisms/layout/RegistFormTab"
import { Header } from "../organisms/layout/Header"

type User = {
    id: Number,
    name: string,
    username: string
}

export const Home: VFC = memo(() => {
    
    const { user, incomeCategory, expenditureCategory, saveAmount, usableAmount ,init, saveAction } = useHome();

    useEffect(() => {
        init();
    }, [init])
    const date = new Date()

    return (
        <>
            <Header />
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="right">おかえり、{ user && user.name }さん</Heading>
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">今月の目標貯金額：{saveAmount.toLocaleString()}円</Heading>
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }} textAlign="center">本日の使用可能金額：{usableAmount.toLocaleString()}円</Heading>

            <Stack spacing={4} px={4} py={5}>
                <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>{date.toLocaleDateString()}</Heading>
                <RegistFormTab incomeArry={incomeCategory} expenditureArry={expenditureCategory} userId={ user == null ? 0 : Number(user.id) } saveAction={saveAction} init={init}/>
            </Stack>
            <Outlet />
        </>
    )
})